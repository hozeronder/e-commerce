import NavbarLeft from "./navbaritem/NavbarLeft";
import NavbarRight from "./navbaritem/NavbarRight";
import NavbarMiddle from "./navbaritem/NavbarMiddle";
import {useNavigate} from "react-router-dom";
import React from "react";


const Navbar = () => {
    const navigate = useNavigate()
    return (<>
            <div className="line mt-5">
                <div className=" justify-around flex">
                    <NavbarMiddle onClick={() => navigate("/")}> </NavbarMiddle>
                </div>
                <div className=" justify-around flex ">
                    <NavbarLeft/>
                    <NavbarRight/>
                </div>
            </div>
        </>
    );
};

export default Navbar;
