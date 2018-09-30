import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      // redirect: "/home",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/skill",
      name: "skill",
      component: () => import("@/views/Skill")
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
          component: () => import("@/views/Article/body/vertualDom")
        },
        {
          path: "2",
          component: () => import("@/views/Article/body/QuestionsCSS")
        },
        {
          path: "3",
          component: () => import("@/views/Article/body/QuesttionsJS")
        },
        {
          path: "4",
          component: () => import("@/views/Article/body/DesignPattern")
        }
      ]
    }
  ]
});
