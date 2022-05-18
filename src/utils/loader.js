import * as THREE from 'three'
import image from "../assets/textures/earth/earth_texture.jpg"
import worldSetup from './worldSetup'

class Loader{

    constructor(type,data){
        this.world = new worldSetup()
        this.scene = this.world.scene
        if(type=="texture" && data.source.texture && data.source.bump){
            this.loadTexture(data)
        }
        if(type=="image" && data.source.texture){
            this.loadImage(data)
        }
        if(type=="background" && data.source){
            this.loadBackground(data)
        }
    }
    
    loadBackground(data){
        const backgroundTexture = new THREE.TextureLoader().load(data.source);
        this.scene.background = backgroundTexture;
    }
    
    loadImage(data){
        let position = new THREE.Vector3(data.position.x, data.position.y, data.position.z)
        let ImageTexture = data.source.texture
        let radius= data.radius

        const itemGeometry = new THREE.SphereGeometry(radius, radius*2, radius*2)
        const itemMaterial = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load(ImageTexture),
            transparent: true
        })
        let item = new THREE.Mesh(itemGeometry,itemMaterial)
        item.name=data.name
        item.position.set(data.position.x, data.position.y, data.position.z)
        this.scene.add(item)

    }

    loadTexture(data){
        let position = new THREE.Vector3(data.position.x, data.position.y, data.position.z)
        let itemTexture = data.source.texture
        let bumpMap = data.source.bump
        let radius = data.radius

        // require([this.itemTexture],function(itemTexture){
        //     console.log("works")
        // })
        
        const itemGeoemtry = new THREE.SphereGeometry(radius, radius*2, radius*2)
        const itemMaterial = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load(itemTexture),
            bumpMap: new THREE.TextureLoader().load(bumpMap),
            bumpScale: 9
        })
        let item = new THREE.Mesh(itemGeoemtry, itemMaterial)
        item.position.set(data.position.x, data.position.y, data.position.z)
        item.name=data.name
        this.scene.add(item)

    }
}

export {Loader}