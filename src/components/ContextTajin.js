import React, {useState, createContext} from "react";


export const ContextTajin = createContext();

export const TajinProvider = props =>{

    const [date,setDate]=useState(new Date());

    return(
        <ContextTajin.Provider value={{
            date,
            setDate
        }}>
            {props.children}
        </ContextTajin.Provider>
    );
};