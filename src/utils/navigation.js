import worldSetup from './worldSetup'
import { DataToLoader } from './resources'
import TWEEN from 'tween'
import { Box2 } from 'three'

const navigateToSpaceItem = (target) =>{
    
    // console.log(DataToLoader.objectNames.indexOf(target))
    let itemIndex = DataToLoader.objectNames.indexOf(target)
    let itemRadius = DataToLoader.items[itemIndex].radius
    let itemPos={}
    itemPos.x = DataToLoader.items[itemIndex].position.x
    itemPos.y = DataToLoader.items[itemIndex].position.y
    itemPos.z = DataToLoader.items[itemIndex].position.z

    const world = new worldSetup()
        
    // console.log( itemPos.x, itemPos.y, itemPos.z)

    navigationEvent( itemPos.x, itemPos.y, itemPos.z)
    navigateCamera( itemPos.x, itemRadius, {x:itemPos.x, y:itemPos.y, z:itemPos.z})

}

const navigateCamera = (xAxis, itemRadius, lookAt)=>{
    const world = new worldSetup()
    var position = { x : world.camera.position.x, z: world.camera.position.z };
    var target = { x : xAxis, z: itemRadius*2 };

    // var L
    const update = function(){
        world.camera.position.x = position.x;
        world.camera.position.z = position.z;
    } 
    
    var tween = new TWEEN.Tween(position).to(target, 2000);

    // console.log('look at ', target)
    // world.camera.lookAt( lookAt.x, lookAt.y, lookAt.z )
 
    tween.onUpdate(update);
    tween.delay(500)
    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
}

const navigationEvent = ( x, y, z )=>{
    const world = new worldSetup()

    world.position.x = x
    world.position.y = y
    world.position.z = z
}

export { navigationEvent, navigateToSpaceItem }