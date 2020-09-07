import React from "react";

const Prices = () => {
    return (
        <div className={"price-container component"}>
            <div className={"price-box"}>
                <h2>Tajine</h2>
                <p> 32 cm széles</p>
                <p> 22 - 28 magas </p>
                <p> Lángállo mázzal</p>
                <h3>23.000 Ft .-</h3>
            </div>
            <div className={"price-box"}>
                <h2>Egyedi tajine</h2>
                <p> Egyedi méretben </p>
                <p> Egyedi mintákkal</p>
                <p> Lángállo mázzal</p>
                <h3>25.000 Ft-tól </h3>
            </div>
        </div>
    );
};

export default Prices;