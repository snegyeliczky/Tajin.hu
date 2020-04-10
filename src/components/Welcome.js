import React from "react";
import ReactImageAppear from 'react-image-appear';


const Welcome = () => {
    const publicFolder = process.env.PUBLIC_URL;

    return (
        <div id="Welcome" className={"component"}>
            <h1>Mi is pontosan a Tajin ??</h1>
            <div className={"textContent"} id={"WelcomeContent"}>
                <div id={"aboutMe"}>
                    <h3>A Tajin</h3>
                    <p> "(ejtsd: tazsin) az észak-afrikai, pontosabban a marokkói konyha sajátos edénye. Sajátos,
                        mert az étel se nem fő, se nem sül benne, inkább párolódik. És mivel lassan, gőzben készül,
                        megőrzi a vitamintartalma javát, és az aromák sem vesznek el."
                    </p>
                </div>
                <div className={"welcomeImgContainer"}>
                    <img
                        src={publicFolder + '/images/unnamed.jpg'}/>
                </div>
            </div>

        </div>
    );
};

export default Welcome;