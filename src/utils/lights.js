import * as THREE from 'three'
import worldSetup from './worldSetup'

class Lighting {
    constructor(){
        this.world = new worldSetup()
        this.scene = this.world.scene
        this.setLights()
    }
    setLights(){
        this.lights ={}
        this.lights.ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
        this.scene.add(this.lights.ambientLight)

        this.lights.pointLight = new THREE.PointLight(0xffffff,1,150)
        this.scene.add(this.lights.pointLight)
        
        this.lights.pointLight.position.set(0,100,0)
        // this.lights.pointLightHelper = new THREE.PointLightHelper(this.lights.pointLight,1)
        // this.scene.add(this.lights.pointLightHelper)

        
    }
}

export {Lighting}