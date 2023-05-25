import React, {useEffect} from 'react'
import {BiSearch} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
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

            <div className='flex items-end border p-3 rounded-full bg-gray-200 '>
                <input className=' bg-gray-200 outline-none' type="text" placeholder="Search"/>
                <BiSearch size={28}/>
            </div>
            <div>
                <AiOutlineHeart size={28}/>
            </div>
            <div onClick={() => navigate("cart")} className='relative'>
                <div
                    className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{carts?.length}</div>
                <SlBasket className='cursor-pointer' size={28}/>
            </div>
        </div>)
}

export default NavbarRight
