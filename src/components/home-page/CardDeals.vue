<template>
  <div class="cardFlash-deals  py-16">
    <div class="title mb-10 px-10 d-flex align-center justify-space-between">
      <h1 style="color: red; padding: 50px">Flash Deals</h1>
      <a href="#" class="text-black" style="font-size:14px">
        Shop All
      </a>
    </div>
    <Swiper
      style="padding: 50px"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="5"
      :space-between="35"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000 }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <img
            :src="
              showenItem[item.title] ? showenItem[item.title] : item.thumbnail
            "
            class="w-100"
            style="height: 200px; border-radius: 20px"
            alt=""
          />
          <v-card-text class="pl-0 pb-1">
            {{ item.title }}
            {{
              item.description.split(" ").length <= 8
                ? item.description
                : item.description.split(" ").slice(0, 8).join(" ") + "..."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-2"
            size="x-small"
            density="compact"
          ></v-rating>
          <v-card-text>
            <del>{{ item.price }}</del>
            From
            <span style="color: red; font-weight: 700">
              {{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>

          <v-btn-toggle v-model="showenItem[item.title]">
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
            >
              <img style="border-radius: 50%" :src="pic" alt="" width="50" />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="compact"
              class="py-2 px-12"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
              >choose Option</v-btn
            >
          </div>
        </v-card>
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  data: () => ({
    showenItem: {},
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style></style>
