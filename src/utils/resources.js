const backgroundTexture= require("../assets/background/space.jpg")

const earthTexture = require("../assets/textures/earth/earth_texture.jpg")
const earthBump = require("../assets/textures/earth/earth_bump.jpg")
const earthCloudsTexture = require("../assets/textures/earth/earth_cloud.png")

const moonTexture = require("../assets/textures/moon/moon.jpg")
const moonBump = require("../assets/textures/moon/moon_normal.png")

const sunTexture = require("../assets/textures/sun/sun.jpg")


//make sure names match and are consistent
let DataToLoader = 
    {   
        objectNames:['background','earth','earthClouds','moon','sun'],
        items:[
            { name:"background", type:"background", source:backgroundTexture
            },
            { name:"earth", type:"texture", radius:30, position:{x:0,y:0,z:0}, source:{ 
                texture: earthTexture,
                bump: earthBump,
            }},
            { name:"earthClouds", type:"image", radius:30.5, position:{x:0,y:0,z:0}, source:{ 
                texture: earthCloudsTexture
            }},
            
            {name:"moon", type:"texture", radius:10, position:{x:180,y:0,z:0}, source:{ 
                texture: moonTexture,
                bump: moonBump,
            }},
            { name:"sun", type:"image", radius:100, position:{x:500,y:0,z:0}, source:{
                texture: sunTexture
            }},
        ]
    }


let FactsLoader = {
    objectNames:['start','earth','moon','sun'],
    earth:{
        heading: "Earth",
        details: "This plantet calls home the milky way galaxy",
        facts:[
            "temparature ranges from -50 oC to 120oC",
            "Has water and soil",
            "Supports 10000 types of Life",
            "1 billion years old",
        ]
    },
    moon:{
        heading: "Moon",
        details: "Moon to earth",
        facts:[
            "temparature ranges from -50 oC to 120oC",
            "No water and soil",
            "No signs of Life",
            "1 billion years old",
            "May have collided with earth",
            "In geostationary lok with earth"
        ]
    },
    sun:{
        heading: "Sun",
        details: "Life giver to earth",
        facts:[
            "temparature ranges from 10050 oC to 12mil oC",
            "No water and soil",
            "No signs of Life",
            "1 billion years old",
            "Fueled my nucler fusion"
        ]
    }
}

module.exports = {DataToLoader,FactsLoader}