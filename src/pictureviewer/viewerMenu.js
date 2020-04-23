import React from "react";
import {Menu} from 'antd';
import "../customCSS/menu.css";



const ViewerMenu = () => {

    return (
        <header>
            <Menu mode="horizontal" id={"menu"}>
                <Menu.Item>
                    <a href={"/"} smooth={true} duration={500}>
                        Back
                    </a>
                </Menu.Item>
            </Menu>
        </header>
    );

};

export default ViewerMenu;