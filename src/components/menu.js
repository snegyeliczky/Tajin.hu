import React from "react";
import {Menu} from 'antd';
import "../customCSS/menu.css";
import {Link} from "react-scroll"
import SubMenu from "antd/es/menu/SubMenu";


const TajinMenu = () => {

    return (
        <header>
            <Menu mode="horizontal" id={"menu"}>
                <Menu.Item>
                    <Link to={"Welcome"} smooth={true} duration={500}>
                        Bemutatkozás
                    </Link>
                </Menu.Item>
                <SubMenu  title={<Link className={"subTitle"} to={"carousel-container"} smooth={true} duration={500}>
                    Termékek
                </Link>}>
                    <Menu.Item className={"subMenu"}>
                        <a href={"/pictures"}>
                            Termékek kínálat
                        </a>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item>
                    <Link  to={"about-tajine-container"} smooth={true} duration={1000}>
                        Tajine-ról
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"contactContainer"} smooth={true} duration={1000}>
                        Kapcsolat
                    </Link>
                </Menu.Item>
            </Menu>
        </header>


    );

};

export default TajinMenu;