import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => (this.flashDeals = res.data.products.slice(0, 10)))
        .catch((err) => console.log(err));
    },
  },
});
