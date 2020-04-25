import React, {useContext, useEffect} from "react";
import {ContextTajin} from "../components/ContextTajin";

const Pictures = () =>{
    const publicFolder = process.env.PUBLIC_URL+"/images/";

    const {imgList} = useContext(ContextTajin);

    function loadPic() {
        let element = document.querySelector("#pictureContainer");
        for (let img of imgList) {
            let pictureBlock = document.createElement("div");
            pictureBlock.setAttribute("class","pictureBlock");

            let imageBlock = document.createElement("div");
            let imgPath = publicFolder+img.path;
            imageBlock.setAttribute("class", "img")
            imageBlock.setAttribute("data-name",img.path)
            imageBlock.style.backgroundImage = "url("+imgPath+")";

            let imgLegend = document.createElement("div");
            imgLegend.innerText=img.legend;
            imageBlock.appendChild(imgLegend)

            pictureBlock.appendChild(imageBlock);


            let imgTitle = document.createElement("h3");
            imgTitle.innerText=img.name;
            pictureBlock.appendChild(imgTitle)

            let imgPrice = document.createElement("p");
            imgPrice.innerText= "Ár: "+img.price+"Ft";
            pictureBlock.appendChild(imgPrice)

            element.appendChild(pictureBlock)
        }
    }

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
        loadPic();
        bluerOthersOnHover()

    });



    return(
        <div id={"pictureContainer"} className={"component"}>

        </div>
    );

}

export default Pictures;