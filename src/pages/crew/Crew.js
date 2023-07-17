import React,{ useEffect, useState } from "react"
import { InfoArticle } from "../../components/InfoArticle/InfoArticle"
import { useInfo } from "../../hooks/useInfo"
import "./crew.css"


import { helpImport } from "../../helpers/helpImport"
import bgDesktop from "../../assets/crew/background-crew-desktop.jpg"
import bgTablet from "../../assets/crew/background-crew-tablet.jpg"
import bgMobile from "../../assets/crew/background-crew-mobile.jpg"


export const Crew = ({handleBg}) => {
  const [selected, setSelected] = useState("anousheh ansari")
  const {info, handdleInfo}  = useInfo()

  const handdleSelected = (e) => {
      setSelected(e.target.value)
      handdleInfo(2,e.target.value);
    }

  useEffect(()=>{
    helpImport(bgDesktop, bgTablet,bgMobile, handleBg)

    handdleInfo(2,"anousheh ansari")
  },[])

  return (
    <>
    <h4 className="crew title-section"><b>02 </b> met your crew</h4>
    <section className="crew section-article">
       <InfoArticle 
       title1={info.roll}
       classTitle1={"title-xl"}
       title2={info.name}
       classTitle2={"title-name"}
       description={info.description}
       />
       <form className="selecteds-persons">
       <label
         className= {selected === "anousheh ansari" ? "active" : ""}
       >
          <input 
          type="radio"
          name="anousheh ansari" 
          value="anousheh ansari"
          checked = {selected === "anousheh ansari"}
          onChange={handdleSelected}
          required
          />
          </label>
         <label
           className={selected === "douglas gerald" ? "active" : ""}
         >
            <input 
           type="radio"
           name="douglas gerald" 
           value="douglas gerald"
           checked = {selected === "douglas gerald"}
          onChange={handdleSelected}
           required
          />
          </label>
         <label
           className= {selected === "victor glover" ? "active" : ""}
         >
            <input 
           type="radio"
           name="victor glover" 
           value="victor glover"
           checked = {selected === "victor glover"}
          onChange={handdleSelected}
           required
          />
          </label>
         <label
           className= {selected === "mark richard" ? "active" : ""}
         >
            <input 
           type="radio"
           name="mark richard" 
           value="mark richard"
           checked = {selected === "mark richard"}
          onChange={handdleSelected}
           required
          />
          </label>
       </form>
      </section>
      <section className="crew section-graphic">
        <img src={info.img}/>
      </section>
    </>
  )
}
