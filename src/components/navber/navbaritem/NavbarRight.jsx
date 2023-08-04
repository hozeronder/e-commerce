import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal} from "../../../redux/cartSlice";
import {useNavigate} from "react-router-dom";

function NavbarRight() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {carts} = useSelector(state => state.carts)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (<div className='flex justify-around sm:gap-8 gap-5'>

        <div>
            ROOMS
        </div>
        <div onClick={() => navigate("cart")} className='cursor-pointer'>
            CONTACT
        </div>

    </div>)
}

export default NavbarRight
