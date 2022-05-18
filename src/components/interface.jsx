import react from 'react'
import {StyleDiv} from "../styles/interface"
export const InterfaceDiv = ({onPress}) => {

    return(
    <StyleDiv>
            <h1 id="spaceItemTitle"></h1>
            <p id="spaceItemDetails"></p>
            <ul id="spaceItemFactList">
            </ul>
            <button id='spaceExplorerBtn' onClick={onPress}>Begin Exploring</button>
    </StyleDiv>
    )
}
