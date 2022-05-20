// import {StyleDiv} from "../styles/interface" styled-componenets
import '../styles/interface.scss'

export const InterfaceDiv = ({onPressForward, onPressBackward}) => {

    return(
    <div className="interface">
            <div className='content'>
                <h1 id="spaceItemTitle"></h1>
                <p id="spaceItemDetails"></p>
                <ul id="spaceItemFactList">
                </ul>
            </div>
            <button id='spaceExplorerBtnForward' onClick={onPressForward}>Begin Exploring</button>
            <button id='spaceExplorerBtnBackward' onClick={onPressBackward}>back</button>
    </div>
    )
}
