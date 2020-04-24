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

    useEffect(() => {
        loadPic();
    });



    return(
        <div id={"pictureContainer"} className={"component"}>

        </div>
    );

}

export default Pictures;