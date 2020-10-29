import React, {useContext, useEffect} from "react";
import {ContextTajin as ContextTajine} from "../components/ContextTajin";
import PictureBlock from "./pictureBlock";
import { CardColumns, Container } from "react-bootstrap";


const Pictures = () =>{

    const {imgList} = useContext(ContextTajine);

    function blurOthersOnHover(){
        let listOfImg = document.querySelectorAll(".img");
        for (let element of listOfImg){
            element.addEventListener("mouseover", function () {
                for (let element2 of listOfImg){
                    if(element2.dataset.name!== this.dataset.name){
                        element2.parentElement.style.filter = "grayscale(30%) blur(1.5px)";
                        element2.parentElement.style.zIndex="-1"

                    }
                }
            });
            element.addEventListener("mouseleave", function () {
                for (let element2 of listOfImg){
                    setTimeout(() =>{
                        element2.parentNode.style.filter = "grayscale(0%) blur(0px)";
                        element2.parentElement.style.zIndex="0";
                    },300)
                }
            })
        }
    }

    useEffect(() => {
        blurOthersOnHover();
    });

    return (
        <Container fluid>
            <CardColumns>
                {imgList.map(img =>(
                    <PictureBlock picture={img}/>
                ))}

                {imgList.length==0
                    ? <div> Nem tálálható termék! </div>
                    : ""
                }
            </CardColumns>
        </Container>
    );
};

export default Pictures;