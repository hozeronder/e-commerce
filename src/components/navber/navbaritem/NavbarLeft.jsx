import React from 'react'
import {useNavigate} from "react-router-dom";

function NavbarLeft() {

    const navigate = useNavigate()

    return (<div onClick={() => navigate("/")} className='text-6xl'>Shopal</div>)
}

export default NavbarLeft
