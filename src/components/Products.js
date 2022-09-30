import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Products = () => {
    const publicFolder = process.env.PUBLIC_URL;


    return (
        <div className={"carousel-container component"}>
            <Carousel infiniteLoop={true} autoPlay={true} width={"70%"}>
                <div>
                    <img src={publicFolder + "/images/carousel_1.jpeg"} alt="image1"/>
                    <p className="legend">Gyuvecs tajine-ban</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_3.jpeg"} alt="Pontyszeletek"/>
                    <p className="legend">Pontyszeletek tajine-ban</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_4.jpeg"} alt="Gyömbéres csirke"/>
                    <p className="legend">Gyömbéres curry-s csirkemell</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_5.jpeg"} alt="Brokkolis csirke"/>
                    <p className="legend">Brokkolis csirkecomb</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_6.jpeg"} alt="Tajines"/>
                    <p className="legend">Tajine csendélet</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_7.jpeg"} alt="Csülök"/>
                    <p className="legend">Csülök tajine-ban</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_8.jpeg"} alt="Tajines"/>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_10.jpeg"} alt="Tajine"/>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_11.jpeg"} alt="Polc"/>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_12.jpeg"} alt="Csülök"/>
                    <p className="legend">Krumplis csülök</p>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_13.jpeg"} alt="Tajines"/>
                </div>
                <div id={"crau"}>
                    <img src={publicFolder + "/images/carousel_14.jpeg"} alt="Tajines"/>
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