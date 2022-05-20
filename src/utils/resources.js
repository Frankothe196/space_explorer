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
        details: "The planet we call home lives within the milky way galaxy",
        facts:[
            "Rotation Time: 24 hours",
            "temparature ranges from -89 C to 70 C",
            "Molten core creates a magnetic field",
            "Earth magnetic field stops the sun radiation from blowng the atmosphere away",
            "Human beings along with 8.7 million species call Earth home",
            "4.5 billion years old",
        ]
    },
    moon:{
        heading: "Moon",
        details: "The Moon is Earth only natural satellite",
        facts:[
            "Estimated age: 5.4 billion years",
            "Temparature range: -175 C - 170 C ( celsius )",
            "5th largest satellite in the solar system",
            "384,000km away from Earth",
            "temparature ranges from -50 oC to 120oC",
            "No water and soil",
            "No signs of Life",
            "Does not Rotate",
            "One side of the moon permanently faces the earth ( geostationary lock )"
        ]
    },
    sun:{
        heading: "Sun",
        details: "Life giver to earth, brightest object in our sky",
        facts:[
            "Rotation Time: 27 days",
            "Estimate age: 4.602 billion years",
            "150 million km away from Earth",
            "Its distance from the Sun to the Earth is used by astronomers as a basic measurement unit (Au)",
            "temparature ranges from 5000 C to 27 million C",
            "Hottest part of the sun is the core",
            "The coolest part of the sun is the surface but it has a layer the corona further away from the sun which is much hotter",
            "Fueled by nuclear fusion (Gravity)"
        ]
    }
}

module.exports = {DataToLoader,FactsLoader}