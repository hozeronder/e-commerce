import React, {useEffect, useState} from 'react'
import MiddleComp from "../components/home/MiddleComp";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import {useNavigate} from "react-router-dom";
import Footer from "../components/footer/Footer";

const Home = () => {
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate()


    return (<div>
        <MiddleComp/>
    {/*    <Sorting setSort={setSort}/>
        <div className='flex'>
            <Category setCategory={setCategory}/>
            <Products category={category} sort={sort}/>
        </div>
        <Footer/>*/}
    </div>)
}
export default Home
