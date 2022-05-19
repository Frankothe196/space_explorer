import { useEffect, useState } from "react"

import WorldSetup from "../../utils/worldSetup"
import {InterfaceDiv} from '../../components/interface'
import { navigateToSpaceItem } from '../../utils/navigation'
import { FactsLoader } from "../../utils/resources"

export default function ThreeJs(){
    const [position,setPosition] = useState(0)
    useEffect(()=>{
        //I dont completely understand why state delays to update on first click
        setPosition(()=>position+1)
        const world = new WorldSetup({targetElementId:"threeWorld"})
        let name = FactsLoader.objectNames[position]
        document.getElementById("spaceExplorerBtnForward").innerHTML = position==0?'Begin Exploring':FactsLoader[name].heading
        document.getElementById("spaceExplorerBtnBackward").style.visibility= 'hidden'
        document.getElementById("spaceItemTitle").innerHTML = position==0?'Begin Learning of space':FactsLoader[name].heading
        document.getElementById("spaceItemDetails").innerHTML = position==0?'start a journey':FactsLoader[name].heading
        
    }
    ,[])
    const handleEventForward = () => {
        console.log('forwards, '. position)
        
        let length = FactsLoader.objectNames.length
        if(position<length){
            setPosition(()=>position+1)
            let name = FactsLoader.objectNames[position]
            navigateToSpaceItem(name)
            if(position>1)document.getElementById("spaceExplorerBtnBackward").style.visibility= 'visible'
            document.getElementById("spaceExplorerBtnForward").innerHTML = position==0?'Start':'Travel to next space object'
            document.getElementById("spaceItemTitle").innerHTML = position==0?'Begin Learning of space':FactsLoader[name].heading   
            document.getElementById("spaceItemDetails").innerHTML = position==0?'start a journey':FactsLoader[name].details
            document.getElementById("spaceItemFactList").innerHTML=''
            if(position!=0){
                FactsLoader[name].facts.forEach(element => {
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(element))
                    document.getElementById("spaceItemFactList").appendChild(li)
                });
            }

        }
      }

      const handleEventBackward= () => {
          console.log('backwards, '. position)
          if(position>=1){
            setPosition(()=>position-1)
            let name = FactsLoader.objectNames[position]
            navigateToSpaceItem(name)
            
            if(position==1)document.getElementById("spaceExplorerBtnBackward").style.visibility= 'hidden'
            document.getElementById("spaceExplorerBtnForward").innerHTML = position==0?'Start':'Travel to next space object'
            document.getElementById("spaceItemTitle").innerHTML = position==0?'Begin Learning of space':FactsLoader[name].heading   
            document.getElementById("spaceItemDetails").innerHTML = position==0?'start a journey':FactsLoader[name].details
            document.getElementById("spaceItemFactList").innerHTML=''
            if(position!=0){
                FactsLoader[name].facts.forEach(element => {
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(element))
                    document.getElementById("spaceItemFactList").appendChild(li)
                });
            }

        }
      }
      
      return (
          <>
            <InterfaceDiv onPressForward={handleEventForward} onPressBackward={handleEventBackward}/>
            <div id="threeWorld"></div>
        </>
    )
}   