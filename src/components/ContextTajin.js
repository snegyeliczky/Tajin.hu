import React, {useState, createContext} from "react";
import axios from "axios";


export const ContextTajin = createContext();

export const TajinProvider = props => {

    const [imgList, setImgList] = useState([]);
    const [allProdNum, setAllProdNum] = useState(0);


    const fetchImg = async () => {
        // let axiosResponse = await axios("images/imagelist.json");
        let axiosResponse = await axios("https://europe-west3-beat-cors-server.cloudfunctions.net/beat-cors");
        let imgList1 = axiosResponse.data.imgList;
        setAllProdNum(imgList1.length);
        setImgList(imgList1);
    };

    const fetchAllImg =  async () =>{
        // let axiosResponse = await axios("images/imagelist.json");
        let axiosResponse = await axios("https://europe-west3-beat-cors-server.cloudfunctions.net/beat-cors");
        let FetchedImgList = axiosResponse.data.imgList;
        return FetchedImgList;
    };

    return (
        <ContextTajin.Provider value={{
            imgList,
            fetchImg,
            setImgList,
            fetchAllImg,
            allProdNum
        }}>
            {props.children}
        </ContextTajin.Provider>
    );
};