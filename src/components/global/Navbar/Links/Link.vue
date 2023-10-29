<template>
  <v-col cols="7">
    <ul class="links d-flex justify-space-between" style="list-style: none">
      <li v-for="cat in categories" :key="cat.title">
        <router-link
          style="color: white; text-decoration-line: none; gap: 30px"
          :to="{
            name: 'products_category',
            params: { category: cat.route,title:cat.title },
          }"
        >
          {{ cat.title }}
        </router-link>
      </li>
    </ul>
  </v-col>
  <v-col cols="2"></v-col>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";

export default {
  name: "Links",
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>

<style scoped></style>
