import { useEffect, useState } from "react"

import WorldSetup from "../../utils/worldSetup"
import {InterfaceDiv} from '../../components/interface'
import { navigateToSpaceItem } from '../../utils/navigation'
import { FactsLoader } from "../../utils/resources"


import Loading from '../../components/loading'

export default function ThreeJs(){
    const [position,setPosition] = useState(0)
    let length = FactsLoader.objectNames.length
    
    useEffect(()=>{
        const forwardBtn = document.getElementById("spaceExplorerBtnForward")
        const backwardBtn = document.getElementById("spaceExplorerBtnBackward")
        const title = document.getElementById("spaceItemTitle")
        const details = document.getElementById("spaceItemDetails")
        const facts = document.getElementById("spaceItemFactList")
        let name

        if(position>=1){
            if(position>=2){
                backwardBtn.style.visibility = 'visible'
                if(position==length-1)
                    forwardBtn.style.visibility = 'hidden'
                else
                    forwardBtn.style.visibility = 'visible'
            }else{
                backwardBtn.style.visibility = 'hidden'
            }
            
            name = FactsLoader.objectNames[position]
            title.innerHTML = position==0?'Begin Learning of space':FactsLoader[name].heading
            details.innerHTML = position==0?'start a journey':FactsLoader[name].details
            forwardBtn.innerHTML = 'visit next space object'
            //load facts
            facts.innerHTML = ''
            FactsLoader[name].facts.forEach(element => {
                let li = document.createElement('li')
                li.appendChild(document.createTextNode(element))
                facts.appendChild(li)
            });
            navigateToSpaceItem(name)
        }else{
            title.innerHTML = 'Begin Learning of space'
            details.innerHTML = ''
            facts.innerHTML = ''
            backwardBtn.style.visibility= 'hidden'
            forwardBtn.innerHTML = 'Begin Exploring'
        }
    },[position])
  
    useEffect(()=>{
        const world = new WorldSetup({targetElementId:"threeWorld"})
    }
    ,[])

    const handleEventForward = () => {
        console.log('forwards, '+ position) 
        if(position<length-1)
            setPosition(count=>count+1)
      }

      const handleEventBackward= () => {
          console.log('backwards, '+ position)
          if(position>1)
            setPosition(count=>count-1)
      }
      
      return (
          <>
            <Loading/>
            <InterfaceDiv onPressForward={handleEventForward} onPressBackward={handleEventBackward}/>
            <div id="threeWorld"></div>
        </>
    )
}   