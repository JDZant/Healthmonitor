import Vue from "vue";
import VueRouter from "vue-router";

import ManageServers from "./pages/ManageServers";
import Login from "./pages/Login";
import CpuOverview from "./pages/CpuOverview";
import DiskOverview from "./pages/DiskOverview";
import RamOverview from "./pages/RamOverview";
import GlobalOverview from "./pages/GlobalOverview";
import ServerViewsRouter from "./pages/ServerViewsRouter";

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/game",
  mode: "history",
  routes: [
    { path: "/login", component: Login, name: "login" },
    { path: "/servers", component: ManageServers, name: "servers" },
    {
      path: "/servers/:id",
      component: ServerViewsRouter,
      children: [
        { path: "", component: GlobalOverview, name: "global" },
        { path: "cpu", component: CpuOverview, name: "cpu" },
        { path: "disk", component: DiskOverview, name: "disk" },
        { path: "ram", component: RamOverview, name: "ram" },
      ],
    },
  ],
});

export default router;
