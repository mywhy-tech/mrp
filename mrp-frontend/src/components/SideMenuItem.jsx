import "./SideMenuItem.css"

import Icon from "./Icon.jsx"

export default function SideMenuItem({ text, icon, menuState }) {
    var additionalStyling = {}
    if (icon == undefined) {
        additionalStyling = {
            width: "calc(100% - 20px)",
            gridTemplateColumns: "1fr",
        }
    } else {
        if (menuState == "expanded") {
            additionalStyling = {
                width: "calc(100% - 40px)",
                gridTemplateColumns: "2fr 8fr",
                paddingRight: "30px"
            }
        } else {
            additionalStyling = {
                width: "100%",
                gridTemplateColumns: "1fr"
            }
        }
    }
    
    return (
        <div className="sideMenuItem" style={additionalStyling}>
            {icon && <Icon iconName={icon} size="4vh"/> }
            {menuState === "expanded" && <p>{text}</p>}
        </div>
    )
}