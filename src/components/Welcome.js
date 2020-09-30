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
                <p> Jordán Ági vagyok, fazekas és négy gyermekes családanya.
15 éve készítek sütő- és főzőedényeket, melyek között a tajine számomra a legkedvesebb. Talán, mert "gyökértelen fazekasnak" tartom magam, így nyitott voltam a hagyományos fazekasságtól eltérő formavilág felé.
Emellett a tajine edény nagy felületű kúpos teteje kíváló lehetőség az egyedi díszítésre.
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