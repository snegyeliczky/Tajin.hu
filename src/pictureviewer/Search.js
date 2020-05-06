import React, {useContext} from "react";
import { Input } from 'antd';
import 'antd/dist/antd.css';
import {ContextTajin} from "../components/ContextTajin";

const {Search} = Input;


const SearchField = () =>{
    const { setImgList,fetchAllImg} = useContext(ContextTajin);

    async function searching (value) {
        let allImg =  await fetchAllImg();
        if (value.length==0){
            setImgList(allImg);
            return;
        }
        let searched = [];
        for (let img of allImg){
            if (img.name.toLowerCase().indexOf(value.toLowerCase())!==-1 || img.orderNum.toLowerCase().indexOf(value.toLowerCase())!==-1){
                searched.push(img);
            }
        }
        setImgList(searched);
    }

    return(
        <div className={"search"}>
            <Search
                placeholder="Keresett termék neve vagy rendelési száma"
                style={{ width: 300}}
                onSearch={value => searching(value)}
            />

        </div>
    )
};

export default SearchField;