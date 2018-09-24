import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About")
    },
    {
      path: "/article",
      name: "article",
      component: () => import("@/views/Article"),
      children: [
        {
          path: "/",
          component: () => import("@/views/Article/List")
        },
        {
          path: "1",
          component: () => import("@/views/Article/body/diffDom")
        }
      ]
    }
  ]
});
