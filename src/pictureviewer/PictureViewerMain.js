import React, {useContext, useEffect} from "react";
import ViewerMenu from "./viewerMenu";
import 'antd/dist/antd.css';
import "../customCSS/pictureViewer.css"
import Pictures from "./pictures";
import Footer from "../components/footer";
import {ContextTajin} from "../components/ContextTajin";

const PictureViewerMain = () =>{

    const {fetchImg} = useContext(ContextTajin);

    useEffect(()=>{
        fetchImg();
    },[]);

    return(
        <div>
            <ViewerMenu/>
            <Pictures/>
            <Footer/>
        </div>
    )
};

export default PictureViewerMain;