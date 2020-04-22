import React, {useContext, useEffect} from "react";
import Welcome from "./Welcome";
import Products from "./Products";
import Footer from "./footer";
import Prices from "./Prices";
import 'antd/dist/antd.css';
import "../customCSS/custom.css"
import {ContextTajin} from "./ContextTajin";


const MainPage = () => {

    const {fetchImg,imgList} = useContext(ContextTajin);

    useEffect(()=>{
         fetchImg();
    },[]);

    return (
        <div>
            <Welcome/>
            <Products/>
            <Prices/>
            <Footer/>
        </div>

    );
};

export default MainPage;