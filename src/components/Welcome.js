import React, {useEffect, useState} from "react";



const Welcome = () => {
    const [news,setText] = useState("");
    const publicFolder = process.env.PUBLIC_URL;


    const getNewsFromFile = async () => {
        const r = await fetch("news/news.txt");
        const text = await r.text();
        if( text.length > 2 ) {
            setText( text );
        }
    }

    useEffect(()=>{
        getNewsFromFile()
    },[]);


    return (
        <div id="Welcome" className={"component"}>
            <div id={"welcomeImage"} className={"Welcome-image-container"}>
                <img src={publicFolder + "/images/welcome_image.jpeg"} alt="weclome" className={"Welcome-image"}/>
            </div>
            <div id={"aboutMe"} className={"Welcome-container"}>
                <p> Jordán Ági vagyok, fazekas és négy gyermekes családanya.
2005 óta készítek sütő- és főzőedényeket, melyek között a tajine számomra a legkedvesebb. Talán, mert nyitott vagyok a hagyományos fazekasságtól eltérő formavilág felé.
Emellett a tajine edény nagy felületű kúpos teteje kíváló lehetőség az egyedi díszítésre.
                </p>
                { news.length>3
                    ?<div className={"infoText"}><h3>- ! -  </h3>{news}</div>
                    :""
                }

            </div>
        </div>
    );
};

export default Welcome;