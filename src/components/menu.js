import React from "react";
import {Menu} from 'antd';
import "../customCSS/menu.css";
import {Link} from "react-scroll"


const TajinMenu = () => {

    return (
        <header>
            <Menu mode="horizontal" id={"menu"}>
                <Menu.Item>
                    <Link to={"Welcome"} smooth={true} duration={500}>
                        A Tajin.hu
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"carousel-container"} smooth={true} duration={1000}>
                        Termékek
                    </Link>
                </Menu.Item>
            </Menu>
        </header>


    );

};

export default TajinMenu;