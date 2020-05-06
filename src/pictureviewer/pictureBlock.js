import React from "react";


const PictureBlock = ({picture}) => {
    const {path, legend, name, price, orderNum} = picture;
    const publicFolder = process.env.PUBLIC_URL + "/images/fotos/";
    let imgPath = publicFolder + path;


    let imgStyle = {
        backgroundImage: `url(${imgPath})`
    };

    return (
        <div className={"pictureBlock"}>
            <div className={"img"} style={imgStyle} data-name={path}>
                <div>{legend}</div>
            </div>
            <div className={"textBlock"}>
                <h3>{name}</h3>
                <h4>Ár: {price}</h4>
                <p>Rendelési szám: {orderNum}</p>
            </div>
        </div>
    );
};

export default PictureBlock;