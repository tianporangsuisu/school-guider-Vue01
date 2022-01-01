import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";

import BuildingList from "@/views/BuildingList";

import AllPaths from "@/views/AllPaths";
import UnRepeatedPath from "@/views/UnRepeatedPath";

Vue.use(VueRouter);

const routes = [
    {
        path: "/allBuildings",
        name: "BuildingList",
        component: BuildingList,
    },
    {
        path: "/allPaths",
        name: "AllPaths",
        component: AllPaths,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/unRepeatedPath",
        name: "UnRepeatedPath",
        component: UnRepeatedPath,
    },

];

const router = new VueRouter({
    routes,
});

export default router;
