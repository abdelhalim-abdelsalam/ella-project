<template>
  <div class="footer">
    <v-footer :app="true" color="#f5f5f5" absolute class="pt-10">
      <v-container fluid class="px-0">
        <v-row>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title>Shop</v-card-title>
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(150, 150, 150)"
                v-for="cat in categories"
                :key="cat.title"
              >
                <router-link
                  style="
                    color: rgb(97, 97, 97);
                    text-decoration-line: none;
                    gap: 30px;
                  "
                  :to="{
                    name: 'products_category',
                    params: { category: cat.route ,title:cat.title},
                  }"
                >
                  {{ cat.title }}
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title>FURTHER INFO.</v-card-title>
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >About</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Customer Service</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Reward Program</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Shipping & Returns</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Privacy Policy</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Terms & Conditions</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Blog</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <v-card-title>CUSTOMER SERVICE</v-card-title>
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Search Terms</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Advanced Search</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Orders And Returns</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Contact Us</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)"
                >Theme FAQs</v-card-text
              >
              <v-card-text class="pt-0 pb-3" style="color: rgb(150, 150, 150)">
                class="pt-0 pb-3" style="color: rgb(150, 150, 150)">Store
                Locations</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0" color="transparent">
              <div class="parent">
                <img src="../../assets/images/footer-logo.webp" alt="" />
              </div>
              <v-card-text>
                <v-icon>mdi-map-marker </v-icon>
                685 Market Street San Francisco, CA 94105, US
              </v-card-text>
              <v-card-text>
                <v-icon> mdi-phone </v-icon>
                Call us at (415) 555-5555</v-card-text
              >
              <v-card-text
                ><v-icon> mdi-email </v-icon>
                example@domain.com
              </v-card-text>
            </v-card>
            <div class="link d-flex" style="gap: 20px">
              <span
                class="d-flex align-center justify-center"
                style="
                  width: 40px;
                  height: 40px;
                  color: #ffffff;
                  background: #969696;
                  padding: 10px;
                  border-radius: 50%;
                "
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="icon icon-facebook"
                  width="10"
                  fill="white"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path></svg
              ></span>
              <span
                class="d-flex align-center justify-center"
                style="
                  width: 40px;
                  height: 40px;
                  background: #969696;
                  padding: 10px;
                  border-radius: 50%;
                "
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="icon icon-facebook"
                  width="10"
                  fill="white"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path></svg
              ></span>
              <span
                class="d-flex align-center justify-center"
                style="
                  width: 40px;
                  height: 40px;
                  background: #6a6767;
                  padding: 10px;
                  border-radius: 50%;
                "
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="icon icon-facebook"
                  width="10"
                  fill="white"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path></svg
              ></span>
              <span
                class="d-flex align-center justify-center"
                style="
                  width: 40px;
                  height: 40px;
                  color: #ffffff;
                  background: #969696;
                  padding: 10px;
                  border-radius: 50%;
                "
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="icon icon-facebook"
                  width="10"
                  fill="white"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path></svg
              ></span>
            </div>
          </v-col>
          <v-col>
            <v-col cols="12">
              <div
                class="photo text-center mt-12"
                style="background: transparent"
              >
                <img
                  src="../../assets/images/trust_551fa8e0-5f24-4fbc-bf22-74c01b859a01.avif"
                  alt=""
                />
              </div>
            </v-col>
          </v-col>
        </v-row>
        <v-row class="pt-10 bg-white d-flex align-center">
          <v-col cols="6">
            <span
              >&copy; {{ new Date().getFullYear() }} Ella Demo. All Rights
              Reserved. Powered By Shopify.</span
            >
            <br />
            <span>Shopify Themes By Halothemes.net</span>
          </v-col>
          <v-col cols="6">
            <img src="@/assets/images/payments2.avif" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>
