import React, {useContext, useEffect} from "react";
import {ContextTajin} from "../components/ContextTajin";
import PictureBlock from "./pictureBlock";

const Pictures = () =>{

    const {imgList} = useContext(ContextTajin);

    function bluerOthersOnHover(){
        let listOfImg = document.querySelectorAll(".img");
        for (let element of listOfImg){
            element.addEventListener("mouseover", function () {
                for (let element2 of listOfImg){
                    if(element2.dataset.name!== this.dataset.name){
                        element2.parentElement.style.filter = "grayscale(30%) blur(1.5px)";
                        element2.parentElement.style.zIndex="-1"

                    }
                }
            })
            element.addEventListener("mouseleave", function () {
                for (let element2 of listOfImg){
                    setTimeout(() =>{
                        element2.parentNode.style.filter = "grayscale(0%) blur(0px)";
                        element2.parentElement.style.zIndex="1";
                    },300)
                }
            })
        }
    }

    useEffect(() => {
        bluerOthersOnHover();
    });



    return(
        <div id={"pictureContainer"} className={"component"}>
            {imgList.map(img =>(
                <PictureBlock picture={img}/>
            ))}
        </div>
    );

}

export default Pictures;