import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DataToLoader } from './resources'
import { Lighting } from './lights'
import { Loader } from './loader'

import {InterfaceDiv} from '../components/interface'
import TWEEN from 'tween'
import { adjustLookAt } from './navigation'


export default class worldSetup{
    static instance
    constructor(_options = {}){
        
        if(worldSetup.instance)
        {
            return worldSetup.instance
        }
        worldSetup.instance = this
        this.wHeight=window.innerHeight
        this.wWidth=window.innerWidth
        this.position={}
        this.position.x=0
        this.position.y=0
        this.position.z=0
        this.move={}
        this.move.x=0
        this.move.y=0
        this.move.limits={}
        this.move.limits.x=1000
        this.move.limits.y=1000
        this.cLookAt={}
        this.cLookAt.x=0
        this.cLookAt.y=0
        this.cLookAt.z=0
        this.mouse={}
        this.mouse.x=0
        this.mouse.y=0
        this.zoomLevel=12
        this.LoadData = DataToLoader
        this.targetElementId = _options.targetElementId
        this.setScene()
        this.setRenderer()
        this.setCamera()
        this.setLights()
        this.setItems()
        // this.setWorld()
        this.onResize()
        this.adjustView()
        this.update()
    }
    setScene(){
        this.scene = new THREE.Scene()
    }

    setCamera(){
        this.view={}
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 10000)
        this.camera.position.set( -70, 0, 70 )
        // this.cameraControls= new OrbitControls( this.camera, this.renderer.domElement )
        // this.cameraControls.enableDamping = true
        this.camera.lookAt(10,20,0)
        this.camera.setFocalLength(15)
    }

    
    setCameraLook(x,y,z){
        this.position.x=x
        this.position.y=y
        this.position.z=z
    }

    setRenderer(){
        this.renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor('#010101', 1)
        
        document.getElementById( this.targetElementId ).appendChild( this.renderer.domElement )
    }

    setWorld(){
        // this.gridHelper= new THREE.GridHelper( 500,500 )
        // this.scene.add( this.gridHelper )
    }

    setLights(){
        this.lights = new Lighting()
    }

    setItems(){
        this.LoadData.items.forEach(element => {
            new Loader( element.type,element )
        });
    }

    adjustView(){
        this.view.mouseMove = (_event)=>{
            let midPosX = (_event.clientX-this.wWidth/2)*0.1
            let midPosY = (_event.clientY-this.wHeight/2)*0.1

            adjustLookAt(this.position.x+midPosX ,this.position.y - midPosY, this.position.z)
        }
        
        this.view.changeZoom = (_event)=>{
            if(this.zoomLevel>=40)this.zoomLevel=40
            if(this.zoomLevel<=12)this.zoomLevel=12
            if(this.zoomLevel<=40 && this.zoomLevel>=12){

                if(_event.deltaY>0){
                    this.zoomLevel-=1
                }else if(_event.deltaY<0){
                    this.zoomLevel+=1
                }
                // this.camera.zoom = this.zoomLevel
                console.log(this.zoomLevel)
                this.camera.setFocalLength(this.zoomLevel)
            }
        }

        window.addEventListener('mousemove', this.view.mouseMove)
        window.addEventListener('wheel', this.view.changeZoom)

    }

    onResize(){
        this.view.onResize = ()=>{
            this.wWidth=window.innerWidth
            this.wHeight=window.innerHeight
            
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.setSize( window.innerWidth, window.innerHeight );
    
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', this.view.onResize)
    }

    update(){
        window.requestAnimationFrame(()=>{
            this.update()
        })
        
        // this.cameraControls.update()


        this.camera.lookAt(this.cLookAt.x, this.cLookAt.y, this.cLookAt.z)
        
        this.scene.traverse(function(obj){
            // console.log(obj)
            if(obj.name=='earthClouds'){
                obj.rotation.y+= 0.004
            }
            if(obj.name=='earth'){
                obj.rotation.y+= 0.002
            }
            if(obj.name=='sun'){
                obj.rotation.y+= 0.0009
            }
            if(obj.name=='moon'){
                obj.rotation.y+= 0.0004
            }
        })
        TWEEN.update();
        this.renderer.render( this.scene, this.camera )
    }
}