import { createRouteConfig } from "@tanstack/react-router";
import About from "../../components/About";

export const aboutRoute = createRouteConfig().createRoute({
    path: "about",
    component: About,
})
