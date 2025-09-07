import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        categories: [],
        productsByCategory:[],
        loading: false,
        error: null
    }),
    getters: {
        getTopRating: (state) => {
            return (minrating = 3) => state.products.filter((p) => p.rating.rate > minrating);
        }
    },
    actions: {
        async fetchProducts() {
            this.loading = true;
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                this.products = res.data
            }
            catch {
                this.error = res.error;
            }
            finally {
                this.loading = false;
            }
        },
        async fetchCategories() {
            this.loading = true;
            try {
                const res = await axios.get("https://fakestoreapi.com/products/categories");
                this.categories = res.data;
            } catch {
                this.error = res.error
            } finally {
                this.loading = false;
            }

        },
         async fetchByCategory(cat) {
            this.loading = true;
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/categories/${cat}`);
                this.productsByCategory = res.data;
            } catch {
                this.error = res.error
            } finally {
                this.loading = false;
            }

        }
    }
})