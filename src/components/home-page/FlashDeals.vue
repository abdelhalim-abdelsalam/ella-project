<template>
  <div class="flash-deals">
    <CardDeals :products="flashDeals" />
  </div>
</template>

<script>
import { mapState ,mapActions } from 'pinia';
import { productsModule } from "@/stores/products";
import CardDeals from './CardDeals.vue';
export default {
  components: { CardDeals },
  computed: {
    ...mapState(productsModule, ["flashDeals"]),
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
