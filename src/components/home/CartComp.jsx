import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from "axios";
import Formdata from "../cart/Formdata";


const CardComp = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const searchbox = useSelector((state) => state.searchbox.searchbox);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost/e-commerce-backend/rooms.php');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const decreaseItem = (item) => {
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.room_id === item.room_id);

        if (existingItemIndex !== -1) {
            if (updatedCart[existingItemIndex].quantity > 0) {
                updatedCart[existingItemIndex].quantity -= 1;
                setCart(updatedCart);
            }
        }
    };


    const increaseItem = (item) => {
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.room_id === item.room_id);

        if (existingItemIndex !== -1) {
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            updatedCart.push({...item, quantity: 1});
            setCart(updatedCart);
        }
    };

    let totalAmount = 0;
    cart.forEach((cartItem) => {
        if (cartItem.quantity) {
            totalAmount += cartItem.quantity * cartItem.price;
        }
    });


    return (
        <>
            <div className="grid grid-cols-6">
                <div id="rooms" className="col-span-3 md:col-span-4 mt-10">
                    {data.map((item, index) => (
                        <div key={index} id={`item-${index}`}
                             className={`relative md:flex p-2 mx-2 mb-2 md:mb-8 bg-white bg-opacity-20 rounded-xl`}
                             style={{
                                 gridRowStart: index + 1,
                                 gridColumnStart: 1,
                                 gridRowEnd: index + 2,
                                 gridColumnEnd: 5,
                             }}>
                            <div className="grid grid-cols-6">
                                <div className="card col-span-6 md:col-span-3">
                                    <Carousel showThumbs={false}>
                                        {item.photo1 && (
                                            <div>
                                                <img className="rounded-xl" src={item.photo1}
                                                     alt={`Image 1`}/>
                                            </div>
                                        )}
                                        {item.photo2 && (
                                            <div>
                                                <img className="rounded-xl" src={item.photo2}
                                                     alt={`Image 2`}/>
                                            </div>
                                        )}
                                        {item.photo3 && (
                                            <div>
                                                <img className="rounded-xl" src={item.photo3}
                                                     alt={`Image 3`}/>
                                            </div>
                                        )}
                                    </Carousel>
                                </div>
                                <div className="col-span-6 md:col-span-3 m-auto ml-1 text-justify">
                                    <h2 className='roomtype pl-3'>{item.roomtype} Room</h2>
                                    <p className='description p-3'>{item.description}</p>
                                    <div className=''>
                                        <div className='flex justify-center mt-5 xl:mt-14'>
                                            <button onClick={() => decreaseItem(item)}>-</button>
                                            <div
                                                className='flex justify-center items-center bg-white bg-opacity-20 rounded-xl h-[25px] w-[50px] sm:h-[25px] sm:w-[70px] text-xs sm:text-sm md:text-md'>{item.price} $
                                            </div>
                                            <button onClick={() => increaseItem(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                <div className="col-span-3 md:col-span-2 bg-white bg-opacity-20 rounded-xl m-1 mt-10 md:mx-4 mb-8">
                    <div className="sticky top-0 m-auto">
                        <h2 className="flex justify-center mt-2 basket bg-black bg-opacity-30 mb-8">Your booking
                            details</h2>
                        <div className="grid grid-cols-6 align-middle basket mb-8">
                            {Object.keys(searchbox).map((key) => {
                                const value = searchbox[key];
                                const isKey0 = key === '0';
                                const isKey1 = key === '1';
                                const isKey2 = key === '2';
                                const isKey3 = key === '3';
                                const isKey4 = key === '4';

                                if (isKey0) {
                                    return (
                                        <div key={key} className="basket col-span-3 text-end">
                                            {value.slice(0, 10)}
                                        </div>
                                    );
                                } else if (isKey1) {
                                    return (
                                        <div key={key} className="basket col-span-3">{"- -" + value.slice(0, 10)}
                                        </div>
                                    );
                                } else if (isKey2) {
                                    const roomsText = value < 2 ? "Room" : "Rooms";
                                    return (
                                        <span className="basket m-auto p-1 col-span-2" key={key}>
                                {value} - {roomsText}
                            </span>
                                    );
                                } else if (isKey3) {
                                    const adultsText = value < 2 ? "Adult" : "Adults";
                                    return (
                                        <span className="basket m-auto p-1 col-span-2" key={key}>
                                {value} - {adultsText}
                            </span>
                                    );
                                } else if (isKey4) {
                                    const childrenText = value < 2 ? "Child" : "Children";
                                    return (
                                        <span className="basket m-auto p-1 col-span-2" key={key}>
                                {value} - {childrenText}
                            </span>
                                    );
                                } else {
                                    return (
                                        <div className="basket col-span-6">
                                            No date has been selected
                                        </div>
                                    );
                                }
                            })}

                        </div>
                        {cart.length > 0 && (
                            <ul>
                                {cart.map((cartItem) => (
                                    cartItem.quantity ? (
                                        <li key={cartItem.room_id} className='basket p-3 pb-0'>
                                            {cartItem.roomtype} Room
                                            - {cartItem.quantity} -{cartItem.quantity * cartItem.price}$
                                        </li>
                                    ) : null
                                ))}
                            </ul>
                        )}
                        <div className="bg-black bg-opacity-30 mt-10 m-auto text-center">TOTAL AMOUNT: {totalAmount}$
                        </div>
                        <Formdata></Formdata>
                    </div>


                </div>
            </div>
        </>

    )
};

export default CardComp;
