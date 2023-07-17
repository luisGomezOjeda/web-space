import React ,{useEffect, useState} from "react"
import { useInfo } from "../../hooks/useInfo" 
import { InfoPlanet } from "../../components/InfoPlanets/InfoPlanet";
import "./destination.css"

import { helpImport } from "../../helpers/helpImport";
import bgDesktop from "../../assets/destination/background-destination-desktop.jpg"
import bgTablet from "../../assets/destination/background-destination-tablet.jpg"
import bgMobile from "../../assets/destination/background-destination-mobile.jpg"


export const Destination = ({handleBg}) => {
  const [selectedPlanet, setSelectedPlanet] = useState("moon")
  const {info, handdleInfo} = useInfo()

  useEffect(()=> {
    helpImport(bgDesktop, bgTablet,  bgMobile, handleBg)
    handdleInfo(1,"moon")  
  },[])


  const handdleSelectedPlanet = (e) => {
    setSelectedPlanet(e.target.value)
    handdleInfo(1,e.target.value)
  }

  return (
   <>
      <section className="destination section-graphic">
        <h4 className="title-section"><b>01 </b> pick your destination</h4>
        <img src={info.img}/>
      </section>
     <article className="destination section-article">
       <nav>
       <form className="selecteds--planets">
  <label className={`selected--planet ${selectedPlanet === "moon" ? "selected" : ""}`}>
    <input 
      type="radio"
      name="moon"
      value="moon"
      checked={selectedPlanet === "moon"}
      onChange={handdleSelectedPlanet}
      required
    />
    moon
  </label>
  <label className={`selected--planet ${selectedPlanet === "mars" ? "selected" : ""}`}>
    <input 
      type="radio"
      name="mars" 
      value="mars"
      checked={selectedPlanet === "mars"}
      onChange={handdleSelectedPlanet}
    />
    mars
  </label>
  <label className={`selected--planet ${selectedPlanet === "europa" ? "selected" : ""}`}>
    <input
      type="radio"
      name="europa"
      value="europa"
      checked={selectedPlanet === "europa"}
      onChange={handdleSelectedPlanet}
    /> 
    europa
  </label>
  <label className={`selected--planet ${selectedPlanet === "titan" ? "selected" : ""}`}>
    <input 
      type="radio"
      name="titan"
      value="titan"
      checked={selectedPlanet === "titan"}
      onChange={handdleSelectedPlanet}  
    /> 
    titan
  </label>
</form>

       </nav>
       {
        info &&
        <InfoPlanet title={info.title} article={info.article} distanceKm={info.distanceKm} distanceTime={info.distanceTime}/>
        }
     </article>
   </> 
  )
}
