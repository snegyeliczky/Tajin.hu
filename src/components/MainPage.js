import React from "react";
import TajinMenu from "./menu";
import Welcome from "./Welcome";
import Products from "./Products";
import 'antd/dist/antd.css';
import "../customCSS/custom.css"


const MainPage = () => {


    return (
        <div>
            <Welcome/>
            <Products/>
        </div>

    );
}

export default MainPage;