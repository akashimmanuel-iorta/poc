import { createRouter, createWebHashHistory } from "vue-router";
import CharacterList from "./components/CharacterList.vue";

const routes = [
  {
    name: "CharacterList",
    path: "/",
    component: CharacterList,
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
