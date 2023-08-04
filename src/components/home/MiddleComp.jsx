import React from 'react';
import Datepick from "./Datepick";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid'

const MiddleComp = () => {
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

    const settings = {
infinite: true, speed: 500, autoplay: true, slidesToShow: 1, slidesToScroll: 1
    };

    return (
        <>
            <div className='text-4xl min-[800px]:text-7xl font-extralight block text-center m-auto w-auto h-0 min-[800px]:mt-40 mt-32 '>
                GRAND X HOTEL
            </div>
            <div className='grid grid-cols-4 grid-rows-1 gap-6 w-8/12 mt-10 mb-64 m-auto h-80 text-xl font-sans font-extralight'>
                <div className="grid-item m-auto w-56">
                    <Datepick className="bg-none"/>
                </div>
                <Menu as="div" className="flex m-auto">
                    {({ open }) => (
                        <>
                            <Menu.Button
                                className="rooms flex gap-x-1.5 rounded-md"
                            >
                                ROOM
                                <ChevronDownIcon className="-mr-1 h-5 w-5 mt-1" aria-hidden="true" />
                            </Menu.Button>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                className="bg-white bg-opacity-20"
                            >
                                <Menu.Items
                                    static
                                    className="absolute mt-6 w-24 rounded-md"
                                >
                                    {numbers.map((number) => (
                                        <Menu.Item key={number}>
                                            {({ active }) => (
                                                <button
                                                    href="#"
                                                    className={`px-2 py-1 ${active ? 'bg-blue-500 text-white' : ''}`}
                                                >
                                                    {number}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
                <div className="grid-item m-auto line">Adults/Children</div>
                <div className="grid-item m-auto">
                    <button className="line buttongo">LET`S GO</button>
                </div>
            </div>
        </>
    );
};

export default MiddleComp;
