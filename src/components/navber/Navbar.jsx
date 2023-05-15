import React from 'react'
import NavbarLeft from "./navbaritem/NavbarLeft";
import NavbarRight from "./navbaritem/NavbarRight";
import NavbarMiddle from "./navbaritem/NavbarMiddle";

const Navbar = () => {
    return (<div className='flex max-[800px]:block max-[800px]:justify-around justify-stretch  my-5 @container w-10/12 m-auto'>
            <NavbarLeft/>
            <NavbarMiddle/>
            <NavbarRight/>
        </div>)
}
export default Navbar
