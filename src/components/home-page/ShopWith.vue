<template>
  <div class="shop-with-us py-14">
    <h1><span>Why shop </span> with us ?</h1>
    <v-container>
      <v-row>
        <v-col cols="3" v-for="card in cards" :key="card.title">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 12 : 2"

              style="
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: var(--item-padding-top-style) 15px
                border-radius: var(--item-radius-style) white;
                font-weight: var(--font-weight-medium);
                flex-wrap: nowrap;
                flex-direction: column;
                align-content: center;
                background-color: var(--bg-color-block-style);
                border: 1px solid var(--border-block-style);
                height: 100%;
              "
            >
              <div class="parent">
                <img src="../../assets/images/free-shipping.png" alt="" />
              </div>
              <v-card-title style="color: white">
                {{ card.title }}
              </v-card-title>
              <v-card-text style="color: white">
                {{ card.text }}
              </v-card-text>
              <div class="link">
                <span v-html="card.link"></span>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        img: "../../assets/images/free-shipping.png",
        title: "Free Shipping On First Order",
        text: "Praesent suscipit mattis facilisis.",
        link: `<a href="#" style="color:white;    font-weight: 900;"> Learn More</a>`,
      },
      {
        svg: "",
        title: "Weekly Flash Sale",
        text: "Praesent suscipit mattis facilisis.",
        link: `<a href="#" style="color:white;    font-weight: 900;"> Learn More</a>`,
      },
      {
        svg: "",
        title: "Anual Payment Discount",
        text: "Praesent suscipit mattis facilisis.",
        link: `<a href="#" style="color:white;    font-weight: 900;"> Learn More</a>`,
      },
      {
        svg: "",
        title: "Cashback Reward Program",
        text: "Praesent suscipit mattis facilisis.",
        link: `<a href="#" style="color:white;    font-weight: 900;"> Learn More</a>`,
      },
    ],
  }),
};
</script>
<style lang="scss">
.shop-with-us {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
  h1 {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 35px;
  }
  span {
    color: rgb(45, 251, 223);
  }
}
</style>
