import React, { useEffect, useState } from 'react';
import NavbarLeft from "./navbaritem/NavbarLeft";
import NavbarRight from "./navbaritem/NavbarRight";
import NavbarMiddle from "./navbaritem/NavbarMiddle";

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 800);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex max-[800px]:block max-[800px]:justify-around justify-stretch mt-0 m-5 pt-10 p-5 w-12/12 line'>
            {isSmallScreen ? (
                <>
                    <NavbarMiddle />
                    <NavbarLeft />
                    <NavbarRight />
                </>
            ) : (
                <>
                    <NavbarLeft />
                    <NavbarMiddle />
                    <NavbarRight />
                </>
            )}
        </div>
    );
};

export default Navbar;
