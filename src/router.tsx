import {createReactRouter, createRouteConfig} from "@tanstack/react-router";
import {contactRoute} from "./routes/contact";
import {homeRoute} from "./routes/home";
import {layoutRouter} from "./routes/layout";
import SpinnerElement from "./components/Spinner";


const routeConfig = createRouteConfig().addChildren([
    contactRoute,
    homeRoute
    // layoutRouter.addChildren([contactRoute, homeRoute])
])

export const router = createReactRouter({
    routeConfig,
    defaultPendingComponent: () => <SpinnerElement />,
})
