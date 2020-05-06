import React, {useState, createContext} from "react";
import axios from "axios";


export const ContextTajin = createContext();

export const TajinProvider = props => {

    const [imgList, setImgList] = useState([]);


    const fetchImg = async () => {
        let axiosResponse = await axios("images/imagelist.json");
        let imgList1 = axiosResponse.data.imgList;
        setImgList(imgList1);
    };

    const fetchAllImg =  async () =>{
        let axiosResponse = await axios("images/imagelist.json");
        let FetchedImgList = axiosResponse.data.imgList;
        return FetchedImgList;
    };

    return (
        <ContextTajin.Provider value={{
            imgList,
            fetchImg,
            setImgList,
            fetchAllImg
        }}>
            {props.children}
        </ContextTajin.Provider>
    );
};