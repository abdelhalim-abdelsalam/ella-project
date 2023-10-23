<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer "
      location="right"
      temporary
    ></v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "CardDrawer",
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
