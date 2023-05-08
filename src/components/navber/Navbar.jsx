import React from 'react'
import NavbarLeft from "./navbaritem/NavbarLeft";
import NavbarRight from "./navbaritem/NavbarRight";
import NavbarMiddle from "./navbaritem/NavbarMiddle";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between my-5'>
            <NavbarLeft/>
            <NavbarMiddle/>
            <NavbarRight/>
        </div>
    )
}
export default Navbar
