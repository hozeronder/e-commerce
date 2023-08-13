import React, { useEffect, useState } from "react";
import NavbarLeft from "./navbaritem/NavbarLeft";
import NavbarRight from "./navbaritem/NavbarRight";
import NavbarMiddle from "./navbaritem/NavbarMiddle";

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isSmallScreen ? (
        <div className="my-auto mt-5 ">
            <div className=" justify-around flex">
                <NavbarMiddle />
            </div>
            <div className=" line justify-around flex ">
                <NavbarLeft />
                <NavbarRight />
            </div>
        </div>
    ) : (
        <div className="line mt-5">
            <div className=" justify-around flex">
                <NavbarMiddle />
            </div>
            <div className=" justify-around flex ">
                <NavbarLeft />
                <NavbarRight />
            </div>
        </div>
    );
};

export default Navbar;
