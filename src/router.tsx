import {createReactRouter, createRouteConfig} from "@tanstack/react-router";
import {contactRoute} from "./routes/contact";
import SpinnerElement from "./components/Spinner";


const routeConfig = createRouteConfig().addChildren([
    contactRoute
])

export const router = createReactRouter({
    routeConfig,
    defaultPendingComponent: () => <SpinnerElement />,
})
