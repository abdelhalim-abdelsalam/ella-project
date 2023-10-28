<template>
  <div class="cyber">
    <div class="cyber-image">
      <img src="@/assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="top-categories">
      <v-container >
        <h1 style="text-align: center; font-weight: 900; padding: 30px 0 40px">
          Top Categories
        </h1>
        <v-row>
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card class="text-center" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <img
                  :src="cat.image"
                  alt=""
                  v-bind="props"
                  :style="`cursor: pointer;transition: 0.2s all ease-in-out;
                scale:${isHovering ? 1.10 : 1}`"
                />
              </v-hover>
              <v-card-text> {{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "mobile category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "mobile category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "laptop category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "laptop category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "tv category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "tv category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "mobile category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "mobile category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "laptop category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "laptop category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "tv category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "tv category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
    ],
  }),
};
</script>

<style scoped></style>
