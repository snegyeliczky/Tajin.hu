import React, {useContext, useEffect} from "react";
import ViewerMenu from "./viewerMenu";
import 'antd/dist/antd.css';
import "../customCSS/pictureViewer.css"
import Pictures from "./pictures";
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
        </div>
    )
};

export default PictureViewerMain;