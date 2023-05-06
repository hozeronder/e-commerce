import React, {useEffect, useState} from 'react'
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate()


    return (<div>
        <SliderComp/>
        <Sorting setSort={setSort}/>
        <div className='flex'>
            <Category setCategory={setCategory}/>
            <Products category={category} sort={sort}/>
        </div>
    </div>)
}
export default Home
