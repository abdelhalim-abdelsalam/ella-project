<template>
  <div class="nav-bar">
    <v-app-bar color="#02218f" class="py-2" height="fit-content" absolute>
      <v-container fluid>
        <v-row>
          <v-col cols="3" class="pl-10">
            <a href="/">

              <img src="@/assets/images/logo.png" alt=""  />
            </a>
          </v-col>
          <Search />
          <!-- Icon -->
          <v-col cols="4" class="ps-5">
            <div
              class="parent text-white d-flex justify-space-between align-center"
            >
              <Available />
              <HeartIcon />
              <SignIn />
              <Cart />
            </div>
          </v-col>
          <!-- Link and Help -->
          <Links />
          <Help />
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
import Available from "./Navbar/Available.vue";
import HeartIcon from "./Navbar/HeartIcon.vue";
import SignIn from "./Navbar/SignIn.vue";
import Cart from "./Navbar/Cart.vue";
import Search from "./Navbar/Search.vue";
import Links from "./Navbar/Links/Link.vue";
import Help from "./Navbar/Links/Help.vue";
export default {
  name: "Navbar",
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
  components: {
    Available,
    HeartIcon,
    SignIn,
    Cart,
    Search,
    Links,
    Help,
  },
};
</script>
