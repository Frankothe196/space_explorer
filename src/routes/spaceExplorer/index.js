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
        document.getElementById("spaceExplorerBtn").innerHTML = position==0?'Start':FactsLoader[name].heading
        document.getElementById("spaceItemTitle").innerHTML = position==0?'Begin Learning of space':FactsLoader[name].heading
        document.getElementById("spaceItemDetails").innerHTML = position==0?'start a journey':FactsLoader[name].heading
        
    }
    ,[])
    const handleEvent = () => {
        
        let length = FactsLoader.objectNames.length
        // camera.position.z=explorer?150:30;
        // Gsap.to( position,{
            //   duration: 1,
            //   z:explorer?150:20,
            //   ease: "power3.inout"
            // })
        if(position<length){
            setPosition(()=>position+1)
            let name = FactsLoader.objectNames[position]
            navigateToSpaceItem(name)
            document.getElementById("spaceExplorerBtn").innerHTML = position==0?'Start':FactsLoader[name].heading
            document.getElementById("spaceItemTitle").innerHTML = position==0?'Begin Learning of space':FactsLoader[name].heading   
            document.getElementById("spaceItemDetails").innerHTML = position==0?'start a journey':FactsLoader[name].details
            
            if(position!=0){
                FactsLoader[name].facts.forEach(element => {
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(element))
                    document.getElementById("spaceItemFactList").appendChild(li)
                });
            }

        }
        // navigationEvent(0,explorer?100:20,0)
      }
      
      return (
          <>
            <InterfaceDiv onPress={handleEvent}/>
            <div id="threeWorld"></div>
        </>
    )
}   