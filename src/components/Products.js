import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Products = () => {
    const publicFolder = process.env.PUBLIC_URL;

    return (
        <div className={"carousel-container component"}>
            <Carousel infiniteLoop={true} autoPlay={true} width={"70%"}>
                <div>
                    <img src={publicFolder + "/images/tj1.jpeg"}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={publicFolder + "/images/tj2.jpg"}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={publicFolder + "/images/tj3.jpg"}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Products;