import React from "react";
import { Card } from "react-bootstrap";

const PictureBlock = ({picture}) => {
    const {path, name, price, orderNum} = picture;
    const publicFolder = process.env.PUBLIC_URL + "/images/fotos/";
    const imgPath = publicFolder + path;
    const orientationClass = 'own-card-img ' + ( picture.orientation === 'landscape' ? 'card-img-landscape' : 'card-img-portrait' );

    return (
        <Card className="own-card">
            <Card.Header className="own-card-header">{name}</Card.Header>
            <Card.Body className="own-card-body d-flex justify-content-center">
                <Card.Img src={imgPath} className={orientationClass}></Card.Img>
            </Card.Body>
            <Card.Footer className="own-card-footer">
                <ul style={{listStyleType: "none"}}>
                    <li>Ár: {price} Ft.</li>
                    <li>Rendelési szám: {orderNum}</li>
                </ul>
            </Card.Footer>
        </Card>
    )
};

export default PictureBlock;