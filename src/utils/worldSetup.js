import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DataToLoader } from './resources'
import { Lighting } from './lights'
import { Loader } from './loader'

import {InterfaceDiv} from '../components/interface'
import TWEEN from 'tween'
export default class worldSetup{
    static instance
    constructor(_options = {}){
        
        if(worldSetup.instance)
        {
            return worldSetup.instance
        }
        worldSetup.instance = this
        this.camera=""
        this.position = {}
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
        this.LoadData = DataToLoader
        this.targetElementId = _options.targetElementId
        this.setScene()
        this.setRenderer()
        this.setCamera()
        this.setLights()
        this.setItems()
        this.setWorld()
        this.setView()
        this.update()

    }
    setScene(){
        this.scene = new THREE.Scene()
    }

    setCamera(){
        this.view={}
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.set( -70, 0, 70 )
        // this.cameraControls= new OrbitControls( this.camera, this.renderer.domElement )
        // this.cameraControls.enableDamping = true
        this.camera.lookAt(10,20,0)
    }

    onResize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        window.addEventListener('resize', this.onResize)
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
        this.gridHelper= new THREE.GridHelper( 500,500 )
        this.scene.add( this.gridHelper )
    }

    setLights(){
        this.lights = new Lighting()
    }

    setItems(){
        this.LoadData.items.forEach(element => {
            new Loader( element.type,element )
        });
    }

    setView(){

        // console.log(obj)
        // this.scene.traverse(function(obj){
        // })
        // this.view.mouseMove = (e)=>{
        //     // console.log(e)
        // }
            
        // window.addEventListener('mousemove', this.view.mouseMove)
    }

    update(){
        window.requestAnimationFrame(()=>{
            this.update()
        })

        
        // this.cameraControls.update()
        
        this.camera.lookAt(this.position.x,this.position.y,this.position.z)
        // console.log('Movex: ',this.move.x)
        // console.log('Movex: ',this.move.y)
        
        this.scene.traverse(function(obj){
            // console.log(obj)
            if(obj.name=='earthClouds'){
                obj.rotation.y+= 0.0008
            }
            if(obj.name=='earth'){
                obj.rotation.y+= 0.0004
            }
            if(obj.name=='sun'){
                obj.rotation.y+= 0.00009
            }
        })
        TWEEN.update();
        this.renderer.render( this.scene, this.camera )
    }
}