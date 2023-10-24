<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer />
      <v-main style="padding-top: 145px">
        <slot></slot>
      </v-main>
      <Navbar />
      <fixed-nav />
      <Footer />
    </v-layout>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import CardDrawer from "./CardDrawer.vue";
import FixedNav from './Navbar/FixedNav.vue';
export default {
  name: "Layout",
  data: () => ({
    drawer: true,
  }),
  components: {
    Navbar,
    Footer,
    CardDrawer,
    FixedNav,
  },
};
</script>
