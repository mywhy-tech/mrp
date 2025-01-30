import "./Icon.css"

import { getIcons } from "../contexts/IconContexts"

export default function Icon({ iconName, size, cursor }) {
    const icons = getIcons()
    const iconPath = icons[iconName]

    let additionalStyling = {height: size}
    if (cursor) {
        additionalStyling["cursor"] = "pointer"
    }

    return (
        <div className="iconContainer" style={additionalStyling}>
            <img src={iconPath} className="icon"/>
        </div>
    )
}