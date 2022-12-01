import { createRouteConfig } from "@tanstack/react-router";
import { Pricing } from "../../components/Pricing";

export const pricingRoute = createRouteConfig().createRoute({
    path: "pricing",
    component: Pricing,
})