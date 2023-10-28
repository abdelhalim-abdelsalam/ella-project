<template>
  <div class="home">
    <UpperBanner />
    <the-features />
    <top-offers />
    <TopCategories />
    <FlashDeals />
    <QualityFeatures />
    <MobilePhones :products="mobilePhone" />
    <Televisions :products="decoration" />
    <ShopWith />
  </div>
</template>

<script>
import TheFeatures from "@/components/home-page/TheFeatures.vue";
import UpperBanner from "../components/home-page/UpperBanner.vue";
import TopOffers from "@/components/home-page/TopOffers.vue";
import FlashDeals from "@/components/home-page/FlashDeals.vue";
import TopCategories from "@/components/home-page/TopCategories.vue";
import NewProducts from "@/components/home-page/NewProducts.vue";
import QualityFeatures from "@/components/home-page/QualityFeatures.vue";
import MobilePhones from "@/components/home-page/MobilePhones.vue";
import Televisions from "@/components/home-page/Televisions.vue";
import ShopWith from "@/components/home-page/ShopWith.vue";


import { productsModule } from "@/stores/products";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(productsModule, ["flashDeals", "mobilePhone", "decoration"]),
  },

  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },

  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
    TopCategories,
    NewProducts,
    QualityFeatures,
    MobilePhones,
    Televisions,
    ShopWith,
  },
};
</script>
