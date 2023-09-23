import React, {useState} from 'react'
import MiddleComp from "../components/home/MiddleComp";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()


    return (
        <div>
            <MiddleComp />
        </div>)
}
export default Home
