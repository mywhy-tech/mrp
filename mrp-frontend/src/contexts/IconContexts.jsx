import React, { useState, useEffect, createContext, useContext } from "react";

function importAllIcons() {
    let icons = {}
    let importedIcons = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}")

    const iconPromises = Object.keys(importedIcons).map(async (iconPath) => {
        const iconName = iconPath.split("/").pop().split(".")[0]
        const module = await importedIcons[iconPath]()
        icons[iconName] = module.default
    })

    return Promise.all(iconPromises).then(() => icons)
}

const IconContext = createContext()

export const IconProvider = ({children}) => {
    const [icons, setIcons] = useState({})

    useEffect(() => {
        importAllIcons().then((loadedIcons) => {
            setIcons(loadedIcons)
        })
    }, [])

    return (
        <IconContext.Provider value={icons}>
            {children}
        </IconContext.Provider>
    )
}

export const getIcons = () => {
    return useContext(IconContext)
}