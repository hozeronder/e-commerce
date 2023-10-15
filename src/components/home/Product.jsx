import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from "axios";

const Product = ({isSmallScreen}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost/e-commerce-backend/rooms.php');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return isSmallScreen ? (
        <>
            <div id="rooms" className="product-container">
                {data.map((item, index) => (
                    <div key={index}
                         className="w-[350px] h-[450px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-20 relative cursor-pointer">
                        <div className="card">
                            <Carousel showThumbs={false}>
                                {item.photo1 && (
                                    <div>
                                        <img className="" src={item.photo1} alt={`Image 1`}/>
                                        <p className="legend">Photo 1 Caption</p>
                                    </div>
                                )}
                                {item.photo2 && (
                                    <div>
                                        <img className="" src={item.photo2} alt={`Image 2`}/>
                                        <p className="legend">Photo 2 Caption</p>
                                    </div>
                                )}
                                {item.photo3 && (
                                    <div>
                                        <img className="" src={item.photo3} alt={`Image 3`}/>
                                        <p className="legend">Photo 3 Caption</p>
                                    </div>
                                )}
                                {item.photo4 && (
                                    <div>
                                        <img className="" src={item.photo4} alt={`Image 4`}/>
                                        <p className="legend">Photo 4 Caption</p>
                                    </div>
                                )}
                                {item.photo5 && (
                                    <div>
                                        <img className="" src={item.photo5} alt={`Image 5`}/>
                                        <p className="legend">Photo 5 Caption</p>
                                    </div>
                                )}
                            </Carousel>
                            <div className="card-content">
                                <h2>{item.roomtype}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    ) : (
        <>
            <div id="rooms" className="product-container">
                {data.map((item, index) => (
                    <div key={index}
                         className="w-[300px] h-[350px] p-3 mt-20 mb-5 mx-5 bg-white bg-opacity-10  relative cursor-pointer">
                        <div className="card">
                            <Carousel showThumbs={false}>
                                {item.photo1 && (
                                    <div>
                                        <img className="" src={item.photo1} alt={`Image 1`}/>
                                    </div>
                                )}
                                {item.photo2 && (
                                    <div>
                                        <img className="" src={item.photo2} alt={`Image 2`}/>
                                    </div>
                                )}
                                {item.photo3 && (
                                    <div>
                                        <img className="" src={item.photo3} alt={`Image 3`}/>
                                    </div>
                                )}
                            </Carousel>

                        </div>
                        <div className="card-content">
                            <h2>{item.roomtype}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>

    )
};

export default Product;
