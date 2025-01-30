import "./MosaicContainer.css"

// import '@blueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import React from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import { Button, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export default function MosaicContainer() {

    const TITLE_MAP = {
        a: "Top",
        b: "Bottom",
        new: "New Window"
    }

    return (
        <div className="mosaicContainer react-mosaic-example-app">
            <Mosaic
                renderTile={(id, path) => (
                    <MosaicWindow 
                        path={path} 
                        title={TITLE_MAP[id]}
                        toolbarControls={
                            <Button
                                key="custom action"
                                icon={<Icon icon={IconNames.STAR}/>}
                                onClick={() => {alert("custom action triggered")}}
                            />
                        }
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