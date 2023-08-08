import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Wheelpick from "../components/home/Wheelpick";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Wheelpick">
                <Wheelpick/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews