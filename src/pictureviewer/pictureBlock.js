import React from "react";


const PictureBlock =({picture})=>{
    const{path,legend,name,price}= picture;
    const publicFolder = process.env.PUBLIC_URL+"/images/";
    let imgPath = publicFolder+path;


    let imgStyle = {
        backgroundImage:`url(${imgPath})`,
        backgroundPosition: 'center'
    };

    return(
        <div className={"pictureBlock"}>
            <div className={"img"} style={imgStyle} data-name={path}>
                <div>{legend}</div>
            </div>
            <h3>{name}</h3>
            <h4>Ár: {price}</h4>
        </div>
    );
};

export default PictureBlock;