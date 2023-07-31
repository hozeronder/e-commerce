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
    return (<div className='items-center sm:gap-8 gap-5 flex'>

        <div>
            OUR LOCATIONS
        </div>
        <div onClick={() => navigate("cart")} className='relative cursor-pointer'>
                BOOK NOW
        </div>

    </div>)
}

export default NavbarRight
