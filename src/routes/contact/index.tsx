import Contact from "../../components/Contact";
import {createRouteConfig} from "@tanstack/react-router";
import Nav from "../../components/Nav";

export const contactRoute = createRouteConfig().createRoute({
    path: "contact",
    component: Contact,
})

function ContactPage() {
    return (
        <div className="p-3">
            <Nav/>
            <Contact/>
        </div>
    )
}
