import "./SideMenu.css"

import Icon from "./Icon.jsx"
import { useState } from "react"
import SideMenuItem from "./SideMenuItem.jsx"

export default function SideMenu() {
    const [menuState, setMenuState] = useState("expanded")

    const changeMenuState = () => setMenuState(prevState => (prevState === "expanded" ? "collapsed" : "expanded"));

    return (
        <div className={"sideMenu " + menuState}>
            <div className="topContainer" style={{justifyContent: menuState === "expanded" ? "flex-start" : "center", paddingLeft: menuState === "expanded" ? "15px" : "0px"}}>
                <div className="iconWrapper" onClick={changeMenuState}>
                    <Icon iconName="bars-solid" size="100%"/>
                </div>
            </div>
            <SideMenuItem icon="power-off-solid" text="Power" menuState={menuState} />
            <SideMenuItem icon="house-flag-solid" text="Docking" menuState={menuState} />
            <SideMenuItem icon="signs-post-solid" text="Mission" menuState={menuState} />
            <SideMenuItem icon="camera-solid" text="PTZ" menuState={menuState} />
        </div>
    )
}