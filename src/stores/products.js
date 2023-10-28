import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProduct: [],
    mobilePhone: [],
    decoration: [],
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
  },
});
