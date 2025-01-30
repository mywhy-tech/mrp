import "./SideMenu.css"

import Icon from "./Icon.jsx"
import { useState } from "react"
import SideMenuItem from "./SideMenuItem.jsx"

export default function SideMenu() {
    const iconSize = "1.5rem"
    
    const [menuState, setMenuState] = useState("expanded");
    const handleMenuState = () => {menuState === "expanded" ? setMenuState("collapsed") : setMenuState("expanded")}

    return (
        <div className={"sideMenu " + menuState}>
            <div className="sideMenuTop">
                <SideMenuItem icon={{name: "power-off-solid", size: iconSize}} text="Power" menuState={menuState} />
                <SideMenuItem icon={{name: "house-flag-solid", size: iconSize}} text="Docking" menuState={menuState} />
                <SideMenuItem icon={{name: "signs-post-solid", size: iconSize}} text="Mission" menuState={menuState} />
                <SideMenuItem icon={{name: "camera-solid", size: iconSize}} text="PTZ" menuState={menuState} />
            </div>
            <div className={"sideMenuBottom " + menuState}>
                <div id="iconWrapper" onClick={handleMenuState}>
                    <Icon iconName={menuState === "expanded" ? "angles-left-solid" : "angles-right-solid"} size={iconSize}/>
                </div>
            </div>
        </div>
    )
}