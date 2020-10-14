import React from "react";

const Contact =()=>{
    return(
        <div className={"component"} id={"contactContainer"}>
            <div className={"contentContainer"}>

            <div
            className={"contact contact-text"}>
                <h2>Kapcsolat:</h2>
                <h3>Telefon</h3>
                <p>-Mobil- </p>
                <a href="tel:+36 30 471 3995">+36 30 471 3995</a>
                <p>-Vezetékes-</p>
                <a href="tel:+36 23 344 417">+36 23 344 417</a>
                <h3>E-mail</h3>
                <a href="mailto:jordanagi@fazekasbolt.hu">jordanagi@fazekasbolt.hu</a>
                <h3>Facebook</h3>
                <a href="https://www.facebook.com/agi.jordan.3" target="blank">Jordán Ági</a>
                <h3>Címünk</h3>
                <address>Páty Árpád utca 85.</address>
            </div>

            <div className={"contact"} >
                <iframe width="325" height="325" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src="https://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=P%C3%A1ty+%C3%A1rp%C3%A1d+u+85&amp;sll=47.513524,18.824703&amp;sspn=0.158378,0.30899&amp;ie=UTF8&amp;ll=47.529488,18.826017&amp;spn=0.009897,0.019312&amp;t=k&amp;z=14&amp;output=embed&amp;s=AARTsJrt_-CxjV6bvBNq1CjoqeYoN8f70Q"></iframe>
            </div>

            </div>
        </div>

    )
};
export default Contact;