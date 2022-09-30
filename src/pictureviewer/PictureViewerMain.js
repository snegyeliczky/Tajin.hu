import React, {useContext, useEffect} from "react";
import ViewerMenu from "./viewerMenu";
import 'antd/dist/antd.css';
import "../customCSS/pictureViewer.css"
import Pictures from "./pictures";
import Footer from "../components/footer";
import {ContextTajin} from "../components/ContextTajin";
import SearchField from "./Search";
import Contact from "../components/Contact";

const PictureViewerMain = () =>{

    const {fetchImg} = useContext(ContextTajin);

    useEffect( ()=>{
         fetchImg();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div>
            <ViewerMenu/>
            <SearchField/>
            <Pictures/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default PictureViewerMain;