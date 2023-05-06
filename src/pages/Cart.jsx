import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal} from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";
import ShopingCart from "../icons/ShopingCart";

const Cart = () => {
    const navigate = useNavigate()
    const {carts, totalAmount} = useSelector(state => state.carts)
    const dispach = useDispatch()

    useEffect(() => {
        dispach(getCartTotal())
    }, [dispach])
    return (
        <div>

            {carts?.length > 0 ?
                <div>{carts?.map((cart, i) => (<CartComp key={i} cart={cart}/>))}
                    <div className='flex items-center justify-end text-2xl'>TOTAL AMOUNT :
                        <span className='font-bold text-3xl ml-2'>{totalAmount} TL</span>
                    </div>
                </div> :
                <div>
                    <div className="flex items-center justify-center"><ShopingCart></ShopingCart></div>
                    <div className="flex justify-center text-2xl">No items yet? Continue shopping to explore.</div>
                </div>}
        </div>)
}
export default Cart
