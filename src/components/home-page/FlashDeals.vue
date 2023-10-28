<template>
  <div class="flash-deals">
    <CardDeals :products="flashDeals" />
    <NewProducts :products="newProduct" />
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { productsModule } from "@/stores/products";
import CardDeals from "./CardDeals.vue";
import NewProducts from "./NewProducts.vue";
export default {
  components: { CardDeals, NewProducts },
  computed: {
    ...mapState(productsModule, ["flashDeals","newProduct" , "mobilePhone"]),
  },

  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>

<style scoped></style>
