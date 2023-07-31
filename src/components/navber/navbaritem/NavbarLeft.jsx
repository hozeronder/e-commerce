import React from 'react'
import {useNavigate} from "react-router-dom";

function NavbarLeft() {

    const navigate = useNavigate()

    return (<div className="relative lg:max-w-sm">
            <select className='bg-none bg-transparent w-auto'>

                <option disabled selected hidden
                        className="p-2.5 text-gray-500 bg-none outline-none appearance-none">MENU
                </option>
                <option>ACCOUNT</option>
                <option>MY RESERVATIONS</option>
                <option>ANOTHER MENU</option>
            </select>
        </div>)
}

export default NavbarLeft
