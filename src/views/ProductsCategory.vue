<template>
  <div class="products-category">
    <v-breadcrumbs >

      <h5 class="text-center mt-2 my-2">Products / {{ $route.params.title }} </h5>
    </v-breadcrumbs>
    <v-container>
      <v-row>
        <v-col 
        cols="3"
        v-for="item in categoryProducts.products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img
              :src="
                showenItem[item.title] ? showenItem[item.title] : item.thumbnail
              "
              class="w-100"
              style="height: 200px"
              alt=""
            />
            <v-card-text class="pl-0 pb-1">
              {{ item.title }}
              {{
                item.description+ "" +item.title.split(" ").length <= 7
                  ? item.description
                  : item.description.split(" ").slice(0, 7).join(" ") + "..."
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
                class=" px-10"
                style="text-transform: none; text-align:center; border-radius: 30px"
                variant="outlined"
                >choose Option</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products'
import { mapActions, mapState } from 'pinia'

export default {
  data: () => ({
    showenItem: {},
  }),
  computed: {
      ...mapState(productsModule,["categoryProducts"])
    },
  methods: {
    ...mapActions(productsModule,["getTitle"])
  },
  watch: {
    $route() {
      this.getTitle(this.$route.params.category)

    }
  },
  async mounted() {
    await this.getTitle(this.$route.params.category)
  }
  }
</script>

<style scoped>

</style>