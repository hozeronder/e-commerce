import React from 'react'
import {useNavigate} from "react-router-dom";

function NavbarLeft() {

    const navigate = useNavigate()

    return (
            <div onClick={() => navigate("/")} className='text-6xl cursor-pointer'>ShopIN</div>)
}

export default NavbarLeft
