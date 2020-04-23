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
            let imageBlock = document.createElement("img");
            let imgPath = publicFolder+img.path;
            imageBlock.setAttribute("src",imgPath)
            pictureBlock.appendChild(imageBlock);

            let imgText = document.createElement("p");
            imgText.innerText=img.name;
            pictureBlock.appendChild(imgText)

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