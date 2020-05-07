import React, {useEffect, useState} from "react";



const Welcome = () => {
    const [text,setText] = useState("")

    let getTextFromFile = () => {
        fetch("news/news.txt")
            .then((r) => r.text())
            .then(text => {
                console.log(text);
                if (text.length>2){
                    setText(text);
                }
            })
    };

    useEffect(()=>{
        getTextFromFile()
    },[]);


    return (
        <div id="Welcome" className={"component"}>
            <div id={"aboutMe"} className={"Welcome-container"}>
                <h2>Mi is az a Tajin?</h2>
                <p> "(ejtsd: tazsin) az észak-afrikai, pontosabban a marokkói konyha sajátos edénye. Sajátos,
                    mert az étel se nem fő, se nem sül benne, inkább párolódik. És mivel lassan, gőzben készül,
                    megőrzi a vitamintartalma javát, és az aromák sem vesznek el."
                </p>
                { text.length>3
                    ?<div className={"infoText"}><h3>- ! -  </h3>{text}</div>
                    :""
                }

            </div>
        </div>
    );
};

export default Welcome;