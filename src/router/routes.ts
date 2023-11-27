import { RouteRecordRaw } from "vue-router"

export default [
  {
    path: "/",
    name: "Index",
    component: () => import("@/pages/Index.vue"),
  },
] as RouteRecordRaw[]
