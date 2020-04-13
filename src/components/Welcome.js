import React from "react";
import ReactImageAppear from 'react-image-appear';


const Welcome = () => {
    const publicFolder = process.env.PUBLIC_URL;

    return (
        <div id="Welcome" className={"component"}>
            <div id={"aboutMe"} className={"Welcome-container"}>
                <h2>Mi is az a Tajin?</h2>
                <p> "(ejtsd: tazsin) az észak-afrikai, pontosabban a marokkói konyha sajátos edénye. Sajátos,
                    mert az étel se nem fő, se nem sül benne, inkább párolódik. És mivel lassan, gőzben készül,
                    megőrzi a vitamintartalma javát, és az aromák sem vesznek el."
                </p>
            </div>
        </div>
    );
};

export default Welcome;