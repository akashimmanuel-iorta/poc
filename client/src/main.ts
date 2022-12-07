import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as icons from "vuetify/iconsets/mdi";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/styles";
import { router } from "./routes";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).mount("#app");
