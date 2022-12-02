import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { contactRoute } from "./routes/contact";
import { homeRoute } from "./routes/home";
import { aboutRoute } from "./routes/about/about";
import {searchRoute} from "./routes/search";
import SpinnerElement from "./components/Spinner";
import { pricingRoute } from "./routes/pricing";


const routeConfig = createRouteConfig().addChildren([
    contactRoute,
    homeRoute,
    pricingRoute,
    aboutRoute,
    searchRoute,
    // layoutRouter.addChildren([contactRoute, homeRoute])
])

export const router = createReactRouter({
    routeConfig,
    defaultPendingComponent: () => <SpinnerElement />,
})
