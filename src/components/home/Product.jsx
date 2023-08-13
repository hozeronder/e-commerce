import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Product = ({isSmallScreen}) => {
    const navigate = useNavigate();

    return isSmallScreen ? (
        <>
            <div id="rooms" className="product-container">
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div id="rooms" className="product-container">
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 rounded-xl relative cursor-pointer">
                    <div className="card">
                        <Carousel showThumbs={false}>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra2188-Lux-Suite-Bedroom.jpg"
                                     alt="Image 1"/>
                                <p className="legend">Corner Suites</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra21280-Lux-Suite-768x512.jpg"
                                     alt="Image 2"/>
                                <p className="legend">Corner Suites 2</p>
                            </div>
                            <div>
                                <img className="rounded-xl"
                                     src="https://hotelandra.com/wp-content/uploads/2022/01/Andra1985-Superia-Room_TV.jpg"
                                     alt="Image 3"/>
                                <p className="legend">Corner Suites 3</p>
                            </div>

                        </Carousel>
                        <div className="card-content">
                            <h2>Corner Suites</h2>
                            <p>The Corner One Bedrooms Suites (500 sq. ft) offer one king bed and feature separate
                                sitting
                                room
                                and bedroom areas, divided by louvered doors. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Product;
