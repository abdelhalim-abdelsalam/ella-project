<template>
  <div class="layout">
    <v-layout>
      <CardDrawer />
      <v-main style="padding-top: 145px">
        <slot></slot>
      </v-main>
      <Navbar />
      <Footer />
    </v-layout>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import CardDrawer from "./CardDrawer.vue";
export default {
  name: "Layout",
  data: () => ({
    drawer: true,
  }),
  components: {
    Navbar,
    Footer,
    CardDrawer,
  },
};
</script>
