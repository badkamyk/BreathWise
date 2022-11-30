import {Footer} from "flowbite-react";

export default function FooterComponent() {
    return (
        <Footer container={true} >
            <Footer.Copyright
                href="/"
                by="AgriWise™"
                year={2022}
            />
            <Footer.LinkGroup>
                <Footer.Link href="/about">
                    About
                </Footer.Link>
                <Footer.Link href="/privacy-policy">
                    Privacy Policy
                </Footer.Link>
                <Footer.Link href="/licensing">
                    Licensing
                </Footer.Link>
                <Footer.Link href="/contact">
                    Contact
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}
