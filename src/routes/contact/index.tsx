import Contact from "../../components/Contact";
import {createRouteConfig} from "@tanstack/react-router";

export const contactRoute = createRouteConfig().createRoute({
    path: "contact",
    component: Contact,
})
