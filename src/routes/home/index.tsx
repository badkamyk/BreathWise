import Hero from '../../components/Hero'
import {createRouteConfig} from "@tanstack/react-router";
import Feature from "../../components/Feature";
import Steps from "../../components/Steps";

export const homeRoute = createRouteConfig().createRoute({
    path: "/",
    component: HomePage,
})


function HomePage() {
    return (
        <>
            <Hero/>
            <Feature/>
            <Steps/>
        </>
    )
}
