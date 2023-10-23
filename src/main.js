import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//mitt
import mitt from "mitt";
const Emitter = mitt();

//pinia
import { createPinia } from "pinia";
const pinia = createPinia();

//vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";



const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(pinia)
  .use(router)
  .mount("#app");
