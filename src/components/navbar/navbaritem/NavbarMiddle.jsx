import React from 'react'
import {useNavigate} from "react-router-dom";

const NavbarMiddle = () => {
    const navigate = useNavigate()
    return (<div onClick={() => navigate("/")} className='gap-5 text-4xl cursor-pointer'>
        HOTEL X
    </div>)
}
export default NavbarMiddle
