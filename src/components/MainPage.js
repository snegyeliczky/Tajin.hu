import React, {useContext, useEffect} from "react";
import Welcome from "./Welcome";
import Products from "./Products";
import Footer from "./footer";
import Prices from "./Prices";
import TajinMenu from "./menu";
import Contact from "./Contact";
import 'antd/dist/antd.css';
import "../customCSS/custom.css";


const MainPage = () => {



    return (
        <div>
            <TajinMenu/>
            <Welcome/>
            <Products/>
            <Prices/>
            <Contact/>
            <Footer/>
        </div>

    );
};

export default MainPage;