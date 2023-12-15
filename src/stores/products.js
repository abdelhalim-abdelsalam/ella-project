import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProduct: [],
    mobilePhone: [],
    decoration: [],
    categoryProducts: [],
    getTitle: [],
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Mens Shirts",
        route: "mens-shirts",
      },
      {
        title: "Mens Watches",
        route: "mens-watches",
      },
      {
        title: "Motor Cycle",
        route: "motorcycle",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Lighting",
        route: "lighting",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res.data.products);
          this.flashDeals = res.data.products.slice(0, 10);
          this.newProduct = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.mobilePhone = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.decoration = res.data.products.filter(
            (el) => el.category === "home-decoration"
          );
        })
        .catch((err) => console.log(err));
    },
    async getTitle(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
  },
});
