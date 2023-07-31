import React from 'react'
import {useNavigate} from "react-router-dom";

const NavbarMiddle = () => {
    const navigate = useNavigate()
    return (<div onClick={() => navigate("/")} className='flex justify-center m-auto gap-5 text-4xl cursor-pointer'>
        <div>HOTEL X</div>

    </div>)
}
export default NavbarMiddle
