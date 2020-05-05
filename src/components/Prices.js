import React from "react";

const Prices = () => {
    return (
        <div className={"price-container component"}>
            <div className={"contentContainer"}>
            <div className={"price-box price1"}>
                <h2>Tajin</h2>
                <p> 32 cm séles</p>
                <p> 22 - 28 cm magas </p>
                <p> Lángállo mázzal</p>
                <h3>23.000 Ft .-</h3>
            </div>
            <div className={"price-box price2"}>
                <h2>Egyedi Tajin</h2>
                <p> Egyedi méretben </p>
                <p> Egyedi mintával</p>
                <p> Lángállo mázzal</p>
                <h3>25.000 Ft-tól </h3>
            </div>
        </div>
        </div>
    );
};

export default Prices;