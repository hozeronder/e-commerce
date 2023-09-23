import React from "react";
import { useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavbarRight() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <div className="flex justify-around sm:gap-8 gap-5">
            {isHomePage && <AnchorLink href="#rooms">ROOMS</AnchorLink>}
            <AnchorLink href='#contact'>CONTACT</AnchorLink>
        </div>
    );
}

export default NavbarRight;