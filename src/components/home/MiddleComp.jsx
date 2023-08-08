import React, {useState, useEffect} from 'react';
import Datepick from "./Datepick";
import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

const MiddleComp = () => {
    const numbers = Array.from({length: 10}, (_, index) => index + 1);

    const settings = {
        infinite: true, speed: 500, autoplay: true, slidesToShow: 1, slidesToScroll: 1
    };

    const [selectedRoom, setSelectedRoom] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
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

    return (isSmallScreen ? (
            <>
                <div className='text-4xl font-extralight block text-center m-auto w-auto h-0 mt-32 '>
                    GRAND X HOTEL
                </div>
                <div
                    className='grid grid-cols-1 grid-rows-1 gap-6 w-8/12 mt-10 mb-64 m-auto h-80 text-xl font-sans font-extralight'>
                    <div className="grid-item m-auto w-56">
                        <Datepick className="bg-none items-center"/>
                    </div>
                    <div className="m-auto flex items-center content-center -mt-20">
                        <Menu>
                            {({open}) => (
                                <>
                                    <Menu.Button
                                        onClick={toggleMenu}
                                        className="rooms flex gap-x-1.5 rounded-md"
                                    >
                                        ROOMS
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
                                            <button
                                                onClick={decrementRoom}
                                                className="p-4 text-center rounded-full text-white bg-white bg-opacity-20"
                                            >
                                                -
                                            </button>
                                            <span
                                                className="p-4 text-center text-white">{selectedRoom.toString().padStart(2, '0')}</span>
                                            <button
                                                onClick={incrementRoom}
                                                className="p-4 text-center rounded-full text-white bg-white bg-opacity-20 "
                                            >
                                                +
                                            </button>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    </div>
                    <div className="grid-item m-auto ">Adults/Children</div>
                    <div className="grid-item m-auto">
                        <button className=" buttongo">LET`S GO</button>
                    </div>
                </div>

            </>) : (
            <>
                <div className='text-7xl font-extralight block text-center m-auto w-auto h-0 mt-40 '>
                    GRAND X HOTEL
                </div>
                <div
                    className='grid grid-cols-4 grid-rows-1 gap-6 w-8/12 mt-10 mb-64 m-auto h-80 text-xl font-sans font-extralight'>
                    <div className="grid-item m-auto w-56">
                        <Datepick className="bg-none"/>
                    </div>
                    <div className="relative flex items-center">
                        <Menu>
                            {({open}) => (
                                <>
                                    <Menu.Button
                                        onClick={toggleMenu}
                                        className="rooms flex gap-x-1.5 rounded-md"
                                    >
                                        ROOMS
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
                                        className="absolute -left-8 top-44 w-26 roomButton"
                                    >
                                        <Menu.Items static>
                                            <div className="relative flex items-center">
                                                <button
                                                    onClick={decrementRoom}
                                                    className="p-4 text-center rounded-full text-white bg-white bg-opacity-20"
                                                >
                                                    -
                                                </button>
                                                <span
                                                    className="p-4 text-center text-white flex-1">{selectedRoom.toString().padStart(2, '0')}</span>
                                                <button
                                                    onClick={incrementRoom}
                                                    className="p-4 text-center rounded-full text-white bg-white bg-opacity-20 "
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    </div>
                    <div className="grid-item m-auto line">Adults/Children</div>
                    <div className="grid-item m-auto">
                        <button className="line buttongo">LET`S GO</button>
                    </div>
                </div>
            </>
        )
    );
};

export default MiddleComp;
