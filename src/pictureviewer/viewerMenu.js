import React from "react";
import {Menu} from 'antd';
import "../customCSS/menu.css";
import {Link} from "react-scroll";



const ViewerMenu = () => {

    return (
        <header>
            <Menu mode="horizontal" id={"menu"}>
                <Menu.Item>
                    <a href={"/"}>
                        Vissza a főoldalra
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"contactContainer" } smooth={true} duration={500}>
                        Kapcsolat
                    </Link>
                </Menu.Item>
            </Menu>
        </header>
    );

};

export default ViewerMenu;