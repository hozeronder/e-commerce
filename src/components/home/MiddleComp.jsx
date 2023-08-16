import React, {useState, useEffect} from "react";
import Datepick from "./Datepick";
import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import Wheelpick from "./Wheelpick";
import Wheelpick2 from "./Wheelpick2";
import Product from "./Product";
import Footer from "../footer/Footer";
import SimpleMap from "../footer/maps";

const MiddleComp = () => {
    const numbers = Array.from({length: 10}, (_, index) => index + 1);

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [selectedRoom, setSelectedRoom] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1500);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const incrementRoom = () => {
        setSelectedRoom((prevValue) => prevValue + 1);
    };

    const decrementRoom = () => {
        setSelectedRoom((prevValue) => Math.max(prevValue - 1, 1));
    };

    return isSmallScreen ? (
        <>
            <div className="grandx text-6xl opacity-40 font-extrabold block text-center m-auto w-auto h-0 mt-32 ">GRAND
                X HOTEL
            </div>
            <div
                className="grid grid-cols-1 grid-rows-1 gap-6 w-8/12 mt-10 mb-64 m-auto h-80 text-xl font-sans font-extralight">
                <div className="grid-item m-auto w-56">
                    <Datepick className="bg-none items-center"/>
                </div>
                <div className="m-auto flex items-center content-center -mt-20">
                    <Menu>
                        {({open}) => (
                            <>
                                <Menu.Button onClick={toggleMenu} className="font-normal flex gap-x-1.5 rounded-md">
                                    Rooms
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 mt-1" aria-hidden="true"/>
                                </Menu.Button>

                                <Transition
                                    show={isMenuOpen}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    className="roomButton absolute "
                                >
                                    <Menu.Items static>
                                        <button onClick={decrementRoom}
                                                className="p-3 font-normal text-center rounded-full text-white bg-white bg-opacity-20">
                                            -
                                        </button>
                                        <span
                                            className="p-4 text-center text-white">{selectedRoom.toString().padStart(2, "0")}</span>
                                        <button onClick={incrementRoom}
                                                className="p-3 font-normal text-center rounded-full text-white bg-white bg-opacity-20 ">
                                            +
                                        </button>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>

                <div className="m-auto flex items-center content-center -mt-12">
                    <Wheelpick></Wheelpick>
                    <div className="font-normal">Adults/Children</div>
                    <Wheelpick2></Wheelpick2>
                </div>
                <div className="grid-item m-auto">
                    <button className="font-normal buttongo">SEARCH</button>
                </div>
            </div>
            <Product isSmallScreen={isSmallScreen}></Product>
        </>
    ) : (
        <>
            <div
                className="grandx text-8xl opacity-40 tracking-widest font-extrabold text-center m-auto w-auto h-0 mt-40 ">GRAND
                X HOTEL
            </div>
            <div
                className="grid grid-cols-4 grid-rows-1  w-1/2 mt-10 mb-64 m-auto h-80 text-xl font-sans font-extralight">
                <div className="grid-item m-auto w-56">
                    <Datepick className="bg-none"/>
                </div>
                <div className="relative flex justify-center items-center">
                    <Menu>
                        {({open}) => (
                            <>
                                <Menu.Button onClick={toggleMenu} className="font-normal flex gap-x-1.5 rounded-md">
                                    Rooms
                                    <ChevronDownIcon className="-pr-1 h-5 w-5 mt-1" aria-hidden="true"/>
                                </Menu.Button>

                                <Transition
                                    show={isMenuOpen}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    className="absolute roomButton2"
                                >
                                    <Menu.Items static>
                                        <div className="flex items-center">
                                            <button onClick={decrementRoom}
                                                    className="p-4 text-center rounded-full text-white bg-white bg-opacity-20">
                                                -
                                            </button>
                                            <span
                                                className="p-4 flex text-center text-white">{selectedRoom.toString().padStart(2, "0")}</span>
                                            <button onClick={incrementRoom}
                                                    className="p-4 flex rounded-full text-white bg-white bg-opacity-20 ">
                                                +
                                            </button>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
                <div className="h-80 w-36 m-auto flex items-center content-center">
                    <Wheelpick/>
                    <div className="font-normal">Adults/Children</div>
                    <Wheelpick2/>
                </div>
                <div className="items-center justify-center content-center my-auto ml-32">
                    <button className="buttongo font-normal">SEARCH</button>
                </div>
            </div>
            <Product isSmallScreen={isSmallScreen}></Product>
        </>
    );
};

export default MiddleComp;
