import {createRouteConfig} from "@tanstack/react-router";
import Search from "../../components/Search";

export const searchRoute = createRouteConfig().createRoute({
    path: "search",
    component: Search,
})
