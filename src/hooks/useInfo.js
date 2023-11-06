import React, { useState } from 'react'
// images destiantion :
import imgMoon from "../assets/destination/image-moon.webp"
import imgMars from "../assets/destination/image-mars.webp"
import imgEuropa from "../assets/destination/image-europa.webp"
import imgTitan from "../assets/destination/image-titan.webp"
// images crew :
import imgAnousheh from "../assets/crew/image-anousheh-ansari.webp"
import imgDouglas from "../assets/crew/image-douglas-hurley.webp"
import imgVictor from "../assets/crew/image-victor-glover.webp"
import imgMark from "../assets/crew/image-mark-shuttleworth.webp"
// info tech :
import img1 from "../assets/technology/image-launch-vehicle-portrait.jpg"
import img2 from "../assets/technology/image-space-capsule-portrait.jpg"
import img3 from "../assets/technology/image-spaceport-portrait.jpg"



export const useInfo = () => {

    const infoHome = [
        {title : "moon",
        article : "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distanceKm : "384,400 Km",
        distanceTime : "3 days",
        img : imgMoon
        },
        {title : "mars",
        article : "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distanceKm : "225 mil Km",
        distanceTime : "9 months",
        img : imgMars
        },
        {title : "europa",
        article : "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.!",
        distanceKm : "628 mil Km",
        distanceTime : "3 years",
        img : imgEuropa
        },
        {title : "titan",
        article : "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distanceKm : "1.6 mil Km",
        distanceTime : "7 years",
        img : imgTitan
        }
    ]

    const infoCrew = [
        {
            roll : "Flight Engineer",
            name : "anousheh ansari",
            description : "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            img : imgAnousheh
        },
        {
            roll : "Commander",
            name : "douglas gerald",
            description : "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            img : imgDouglas
        },
        {
            roll : "Pilot",
            name : "victor glover",
            description : "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            img : imgVictor
        },
        {
            roll : "Mission Specialist",
            name : "mark richard",
            description : "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            img : imgMark
        }

    ]

    const infotechnology = [
        {
            name : "1",
            title : "launch vehicle",
            description : "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            img : img1
        },
        {   name : "2",
            title : "space capsule",
            description : " space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            img :img2
        },
        {   name : "3",
            title : "spaceport",
            description : "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            img : img3
        }
    ]

    const [info, setinfo] = useState([])

    const handdleInfo = ((page,title)=> {
        let currentInfo;
        if(page === 1){
            currentInfo = infoHome.find(info => info.title === title)
            setinfo(currentInfo)
        }
        if(page === 2){
            currentInfo = infoCrew.find(info => info.name === title)
            setinfo(currentInfo)
        }
        if(page === 3){
            currentInfo = infotechnology.find(info => info.name == title)
            setinfo(currentInfo)
            
            console.log(title)
        }
    })

    return {info,handdleInfo}
}
 