
// import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import 'react-mosaic-component/react-mosaic-component.css';
import "./MosaicContainer.css"

// import React from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import Icon from "../Icon.jsx"

export default function MosaicContainer() {

    const TITLE_MAP = {
        a: "Top",
        b: "Bottom",
        new: "New Window"
    }

    // const customControls = [
    //     <Button
    //         icon={<Icon icon={IconNames.ADD}/>}
    //     />,
    //     <Button
    //         icon={<Icon icon={IconNames.BACKWARD_TEN}/>}
    //     />,
    //     <Button
    //         icon={<Icon icon={IconNames.BADGE}/>}
    //     />,
    //     <Button
    //         className="window-button"
    //         key="custom action"
    //         icon={<Icon icon={IconNames.STAR}/>}
    //         onClick={() => {alert("custom action triggered")}}
    //     />
    // ]

    const CustomToolbar = () => {
        <div>
            <button><Icon iconName="bars-solid" size="50px"/></button>
            <button><Icon iconName="bars-solid" size="50px"/></button>
            <button><Icon iconName="bars-solid" size="50px"/></button>
        </div>
    }
    
    return (
        <div className="mosaicContainer">
            <div className="toolBar"></div>
            <Mosaic
                renderTile={(id, path) => (
                    <MosaicWindow
                        path={path} 
                        title={TITLE_MAP[id]}
                        toolbarControls={<CustomToolbar />}
                        className="mosaic-window"
                    >
                        <canvas></canvas>
                    </MosaicWindow>
                )}
                initialValue={{
                    direction: "column",
                    first: "a",
                    second: "b"
                }}
            />
        </div>
    )
}