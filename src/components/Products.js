import React, {useContext, useEffect} from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Products = () => {
    const publicFolder = process.env.PUBLIC_URL;


    return (
        <div className={"carousel-container component"}>



            <Carousel infiniteLoop={true} autoPlay={true} width={"70%"}>
                <div>
                    <img src={publicFolder + "/images/carousel_1.jpg"} alt="image1"/>
                    <p className="legend">Gyuvecs tajine-ban</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_3.jpg"}/>
                    <p className="legend">Pontyszeletek tajine-ban</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_4.jpg"}/>
                    <p className="legend">Gyömbéres curry-s csirkemell</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_5.jpg"}/>
                    <p className="legend">Brokkolis csirkecomb</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_6.jpg"}/>
                    <p className="legend">Tajine csendélet</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_7.jpg"}/>
                    <p className="legend">Csülök tajine-ban</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_8.jpg"}/>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_10.jpg"}/>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_11.jpg"}/>
                </div>
            </Carousel>
            <div id={"picturesLink"} >

                <a href={"/pictures"}>Termékek</a>
                <span id={"rounded"}></span>
            </div>

        </div>
    );
};

export default Products;