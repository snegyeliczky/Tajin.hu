import React, {useContext, useEffect} from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ContextTajin} from "./ContextTajin";


const Products = () => {
    const publicFolder = process.env.PUBLIC_URL;

    const {imgList} = useContext(ContextTajin);

    function loadPic() {
        let element = document.querySelector(".thumbs");
        let htmlliElement = document.createElement("li");
        htmlliElement.setAttribute("className","thumb");
        htmlliElement.setAttribute("aria-label","slide item 4");
        htmlliElement.setAttribute("role","button");
        htmlliElement.setAttribute("tabIndex","0")
        let html= '<img src='+ publicFolder + '/images/tj1.jpeg/>';
        htmlliElement.innerHTML = html;
        console.log(element);
        for (let img of imgList) {
            element.appendChild(htmlliElement);
        }
    }

    useEffect(() => {
        loadPic();
    });

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
                <div id={"crau"}>
                    <img src={publicFolder + "/images/tj3.jpg"}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </div>
    );
};

export default Products;