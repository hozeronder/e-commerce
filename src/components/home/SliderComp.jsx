import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        /*dots: true,*/ infinite: true, speed: 500, autoplay: true, slidesToShow: 1, slidesToScroll: 1
    };
    return (<Slider className='bg-black w-10/12 items-center m-auto' {...settings}>
            <div className='!flex items-center px-6  '>
                <div className='bg-black'>
                    <div className='md:text-7xl text-2xl font-bold text-white'>
                        MacBook Pro
                    </div>
                    <div className='my-5 text-white '>
                        <p className='md:text-4xl text-md'>Mover. Maker. Boundary breaker.</p>
                        <p className='hidden md:text-lg md:block text-sm  text-justify justify'>
                            Safari has innovative features that let you enjoy more of the web. <br/> In even more ways.
                            Built-in privacy features help protect your information and keep your Mac secure. An updated
                            start page helps you easily and quickly save, find, and share your favorite sites.</p>
                    </div>
                    <div
                        className='border rounded-full cursor-pointer text-2xl w-6/12 h-16 flex items-center justify-center bg-gray-200'>View
                    </div>
                </div>
                <img className='md:w-auto w-6/12'
                    src="https://www.apple.com/v/home/az/images/heroes/macbook-pro-14-and-16/hero_mbp_preorder__caf0s6im2nqq_mediumtall.jpg"
                    alt=""/>
            </div>
            <div className='!flex items-center px-6'>
                <div className=''>
                    <img className="md:w-auto w-6/12"
                         src="https://www.apple.com/tr/iphone/home/images/overview/hero/hero_iphone_14_pro__e8bufymdlseq_large.jpg"
                         alt=""/>
                    <div className='text-2xl md:text-7xl font-bold text-white'>
                        iPhone 14 Pro
                    </div>
                    <div className='my-5 text-white'>
                        <p className='text-md md:text-4xl'>Pro. Beyond.</p>
                        <p className='hidden md:text-lg md:block text-sm text-justify justify'>
                            You can choose a payment option that works for you, pay less with a trade‑in, connect your
                            <br/>new iPhone to your carrier, and get set up quickly. You can also chat with a Specialist anytime.</p>
                    </div>
                    <div
                        className='border rounded-full cursor-pointer text-2xl w-3/12 h-16 flex items-center justify-center bg-gray-200'>View
                    </div>
                </div>
            </div>
        </Slider>)
}
export default SliderComp
