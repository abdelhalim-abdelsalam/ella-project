<template>
  <div class="home">
    <UpperBanner />
    <the-features />
    <top-offers />
    <FlashDeals />
  </div>
</template>

<script>
import TheFeatures from "@/components/home-page/TheFeatures.vue";
import UpperBanner from "../components/home-page/UpperBanner.vue";
import TopOffers from "@/components/home-page/TopOffers.vue";
import FlashDeals from "@/components/home-page/FlashDeals.vue";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
  },
};
</script>
