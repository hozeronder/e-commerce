import React from 'react'
import Datepick from "./Datepick";




const MiddleComp = () => {
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

    const settings = {
        /*dots: true,*/ infinite: true, speed: 500, autoplay: true, slidesToShow: 1, slidesToScroll: 1
    };
    return (<>
        <div className='text-4xl md:text-7xl font-extralight block text-center m-auto w-auto h-0 mt-40'>
            GRAND X HOTEL
        </div>
        <div
            className='grid grid-cols-4 grid-rows-1 gap-7 w-1/2 mt-10 mb-64 m-auto h-80 text-xl font-sans font-extralight'>
            <div className="grid-item m-auto w-auto">
                <Datepick/>
            </div>
            <div className="grid-item m-auto line">Rooms
                <select className='bg-none bg-transparent w-auto p-1 absolute'>
                    {numbers.map((number) => (
                    <option key={number} position className='bg-none bg-transparent w-auto p-1 fixed'>{number}</option>))}
                </select></div>
            <div className="grid-item m-auto line">Adults/Children</div>
            <div className="grid-item m-auto ">
                <button className="line buttongo">LET`S GO</button>
            </div>

        </div>
    </>)
}
export default MiddleComp
