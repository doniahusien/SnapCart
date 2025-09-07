# 🛒 ShopCart - Frontend Practice E-commerce App

ShopCart is a **frontend-focused e-commerce project** built to practice Vue 3, Pinia, Vue Router, Axios, and Tailwind CSS, using **[Fake Store API](https://fakestoreapi.com/)** as the backend. Users can **log in, view products, and see product details**.

---

## 🎯 Learning Goals (Frontend Focus)
- **Vue 3 Components** – Build reusable components like `LoginForm` and `ProductCard`  
- **Props & Events** – Passing data between components  
- **Pinia Store** – Managing authentication and cart state  
- **Vue Router** – Routing, dynamic routes, and route guards  
- **Axios** – Fetching products and sending login requests to a backend API  
- **Tailwind CSS** – Styling responsive UI without custom CSS  
- **Vee-Validate & Yup** – Frontend form validation  

---

## 🚀 Features
- 🔑 **Login Page** – Authenticate users with validation  
- 🛍️ **Product Listing** – Fetch and display products from Fake Store API  
- 🔍 **Product Details** – View detailed product information on `/product/:id`  
- 🛡️ **Protected Routes** – Cart, Products, and Category pages require login  
- 📱 **Responsive Design** – Works on desktop and mobile  
- 🏗️ **Component-based Architecture** – Clean separation of UI components and pages  
- ⚡ **Efficient State Management** – Using Pinia for authentication and product state  
- 💻 **Frontend API Integration** – Axios used to fetch data and send login requests  
- 🛠️ **Form Validation** – Login form validated using vee-validate and yup  

---

## 📝 Backend (API)
- Using [Fake Store API](https://fakestoreapi.com/)  
- Test login credentials:  
username: derek
password: jklg*_56
- On successful login, a **token** is returned and stored in Pinia.

---

## ⚙️ Installation & Setup
**Prerequisites**  
- Node.js (v14 or higher)  
- npm (comes with Node.js)  

**Setup Steps**
```bash
# Clone the project
git clone https://github.com/doniahusien/shopcart.git

# Navigate into project folder
cd shopcart

# Install dependencies
npm install

# Run development server
npm run dev
