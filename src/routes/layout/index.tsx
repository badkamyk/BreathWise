import {createRouteConfig, Outlet} from "@tanstack/react-router";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";


export const layoutRouter = createRouteConfig().createRoute({
    id: "layout",
    component: LayoutWrapper
})

function LayoutWrapper() {
    return (
        <>
            <Outlet />
            <Footer/>
        </>
    )
}
