import axios from "axios";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    carts: [],
    userId: "2",
    products: {},
  }),

  actions: {
    async fetchCart() {
      const res = await axios.get(
        `https://fakestoreapi.com/carts/user/${this.userId}`
      );
      this.carts = res.data;

      const productIds = this.carts.flatMap(c =>
        c.products.map(p => p.productId)
      );

      for (const id of productIds) {
        if (!this.products[id]) {
          const productRes = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          this.products[id] = productRes.data;
        }
      }
    },

    async updateCart(cartId, products) {
      const res = await axios.put(
        `https://fakestoreapi.com/carts/${cartId}`,
        {
          userId: this.userId,
          date: new Date().toISOString().split("T")[0],
          products,
        }
      );

      const updatedCart = res.data;
      this.carts = this.carts.map(c =>
        c.id === updatedCart.id ? updatedCart : c
      );
    },

    async increment(productId) {
      const latestCart = this.carts[this.carts.length - 1];
      const product = latestCart.products.find(p => p.productId === productId);

      if (product) {
        product.quantity++;
      }

      await this.updateCart(latestCart.id, latestCart.products);
    },

    async decrement(productId) {
      const latestCart = this.carts[this.carts.length - 1];
      const productIndex = latestCart.products.findIndex(
        p => p.productId === productId
      );

      if (productIndex !== -1) {
        if (latestCart.products[productIndex].quantity > 1) {
          latestCart.products[productIndex].quantity--;
        } else {
          latestCart.products.splice(productIndex, 1);
        }
      }

      await this.updateCart(latestCart.id, latestCart.products);
    },

    async addCart(productId) {
      const latestCart = this.carts[this.carts.length - 1];
      const existing = latestCart.products.find(
        p => p.productId === productId
      );

      if (existing) {
        existing.quantity++;
      } else {
        latestCart.products.push({ productId, quantity: 1 });
      }

      await this.updateCart(latestCart.id, latestCart.products);

      if (!this.products[productId]) {
        const productRes = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        this.products[productId] = productRes.data;
      }
    },
  },

  getters: {
    cartItems: (state) => {
      if (state.carts.length === 0) return [];

      const latestCart = state.carts[state.carts.length - 1];

      return latestCart.products.map(p => {
        const prod = state.products[p.productId];
        return {
          productId: p.productId,
          quantity: p.quantity,
          title: prod?.title || "Loading...",
          price: prod?.price || 0,
          image: prod?.image || "",
        };
      });
    },

    totalPrice: (state) =>
      state.carts.length === 0
        ? 0
        : state.carts[state.carts.length - 1].products.reduce((sum, p) => {
            const prod = state.products[p.productId];
            return sum + (prod?.price || 0) * p.quantity;
          }, 0),
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "cart",
        storage: localStorage,
      },
    ],
  },
});
