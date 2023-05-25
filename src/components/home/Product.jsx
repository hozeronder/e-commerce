import React from 'react'
import {useNavigate} from "react-router-dom";

const Product = ({product}) => {
    const navigate = useNavigate();
    return (<div onClick={() => navigate(`products/${product?.id}`)} className='sm:w-[410px] w-[250px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer'>
        <div className='sm:text-3xl text-lg font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span className='sm:text-sm text-xs'>TL</span></div>
        <img className='sm:w-[200px] w-[100px] sm:h-[200px] h-[100px] object-cover m-auto' src={product?.image} alt=""/>
        <div className="sm:text-xl text-xs text-center px-3 mt-3 ">{product?.title}</div>
    </div>)
}
export default Product
