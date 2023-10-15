import React, {useState, useEffect} from "react";
import Datepick from "./Datepick";
import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import Wheelpick from "./Wheelpick";
import Wheelpick2 from "./Wheelpick2";
import Product from "./Product";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setSearchbox} from "../../redux/searchboxSlice";


const MiddleComp = () => {
    const [selectedRoom, setSelectedRoom] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const incrementRoom = () => {
        if (selectedRoom < 10) {
            setSelectedRoom((prevValue) => prevValue + 1);
        } else {
            alert("10'dan fazla oda seçemezsiniz!");
        }
    };

    const decrementRoom = () => {
        setSelectedRoom((prevValue) => Math.max(prevValue - 1, 1));
    };

    const [selectedDate, setSelectedDate] = useState([null, null]);
    const [selectedValue, setSelectedValue] = useState("2");
    const [selectedValue2, setSelectedValue2] = useState("0");
    const history = useNavigate();
    const dispatch = useDispatch();
    const sendDataToLocal = async () => {

        const newSearchboxData = [
            selectedDate[0].toLocaleString(),
            selectedDate[1].toLocaleString(),
            selectedRoom,
            selectedValue,
            selectedValue2,
        ];
        dispatch(setSearchbox(newSearchboxData));
        history("/cart");
    };

    return (
        <>
            <div
                className="text-4xl md:text-8xl sm:text-6xl sm:mt-40 mt-32 opacity-40 font-extrabold text-center m-auto w-auto h-0 ">GRAND
                X HOTEL
            </div>
            <div
                className={`grid lg:grid-cols-4 grid-cols-1 grid-rows-1 gap-6 w-10/12 sm:w-1/2} gap-0 mt-40 mb-64 m-auto h-80 text-xl font-sans font-extralight`}>
                <div className="grid-item m-auto w-56">
                    <Datepick setSelectedDate={setSelectedDate}
                              className="bg-noneitems-center"/>
                </div>
                <div className="m-auto flex items-center content-center">
                    <Menu>
                        {({open}) => (
                            <>
                                <Menu.Button onClick={toggleMenu} className="font-normal flex gap-x-1.5 rounded-md">
                                    Rooms
                                    <ChevronDownIcon className="h-5 w-5 mt-1"
                                                     aria-hidden="true"/>
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
                                    className="absolute mt-20"
                                >
                                    <Menu.Items static>
                                        <div className="flex items-center">
                                            <button onClick={decrementRoom}
                                                    className="p-2 text-center rounded-full text-white bg-white bg-opacity-20">-
                                            </button>
                                            <span
                                                className="p-2 flex text-center text-white">{selectedRoom.toString().padStart(2, "0")}</span>
                                            <button onClick={incrementRoom}
                                                    className="p-2 flex rounded-full text-white bg-white bg-opacity-20 ">+
                                            </button>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
                <div className="m-auto flex items-center content-center max-2xl:mt-30">
                    <Wheelpick selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
                    <div className="font-normal">Adults/Children</div>
                    <Wheelpick2 selectedValue2={selectedValue2} setSelectedValue2={setSelectedValue2}/>
                </div>
                <div className="grid-item m-auto">
                    <button disabled={selectedDate[0] === null || selectedDate[1] === null} onClick={sendDataToLocal}
                            className="font-normal buttongo">SEARCH
                    </button>
                </div>
            </div>
            <Product></Product>

        </>
    );
};

export default MiddleComp;
