import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        /*dots: true,*/ infinite: true, speed: 500, autoplay: true, slidesToShow: 1, slidesToScroll: 1
    };
    return (<div>
        <Slider {...settings}>
            <div className='!flex items-center bg-gray-100 px-6'>
                <div className=''>
                    <div className='text-7xl font-bold'>
                        Best Products
                    </div>
                    <div className='text-lg my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dolores dolorum illo laudantium qui
                        quis similique! Aspernatur atque autem ducimus ea eius eos, impedit, laudantium nam perspiciatis
                        quas sed similique voluptatum?
                    </div>
                    <div
                        className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>View
                    </div>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
                    alt=""/>
            </div>
            <div className='!flex items-center bg-gray-100 px-6'>
                <div className=''>
                    <div className='text-7xl font-bold'>
                        Best Products
                    </div>
                    <div className='text-lg my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dolores dolorum illo laudantium qui
                        quis similique! Aspernatur atque autem ducimus ea eius eos, impedit, laudantium nam perspiciatis
                        quas sed similique voluptatum?
                    </div>
                    <div
                        className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>View
                    </div>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""/>
            </div>
        </Slider>
    </div>)
}
export default SliderComp
