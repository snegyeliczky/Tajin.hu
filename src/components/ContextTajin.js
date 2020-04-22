import React, {useState, createContext} from "react";
import axios from "axios";


export const ContextTajin = createContext();

export const TajinProvider = props => {

    const [imgList, setImgList] = useState([]);


    const fetchImg = async () => {
        let axiosResponse = await axios("images/imagelist.json");
        let imgList1 = axiosResponse.data.imgList;
        setImgList(imgList1);
        return imgList1;
    };

    return (
        <ContextTajin.Provider value={{
            imgList,
            fetchImg,
        }}>
            {props.children}
        </ContextTajin.Provider>
    );
};