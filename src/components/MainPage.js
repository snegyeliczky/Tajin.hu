import React from "react";
import Welcome from "./Welcome";
import Products from "./Products";
import Footer from "./footer";
import 'antd/dist/antd.css';
import "../customCSS/custom.css"


const MainPage = () => {


    return (
        <div>
            <Welcome/>
            <Products/>
            <Footer/>
        </div>

    );
};

export default MainPage;