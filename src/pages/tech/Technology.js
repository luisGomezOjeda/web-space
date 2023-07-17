import React,{ useState, useEffect } from "react"

import "./tech.css"

import { useInfo } from "../../hooks/useInfo"
import { InfoArticle } from "../../components/InfoArticle/InfoArticle"

import { helpImport } from "../../helpers/helpImport"
import bgDesktop from "../../assets/technology/background-technology-desktop.jpg"
import bgTablet from "../../assets/technology/background-technology-tablet.jpg"
import bgMobile from "../../assets/technology/background-technology-mobile.jpg"

export const Technology = ({handleBg}) => {
  const [ selected, setSelected] = useState("1")
  const { info, handdleInfo }=useInfo()

  useEffect(()=>{
    helpImport(bgDesktop, bgTablet,bgMobile, handleBg)
    handdleInfo(3,selected)
  },[])

  const handdleSelected  = (e) => {
    setSelected(e.target.value)
    handdleInfo(3, e.target.value)
  }

  return (
    <>
      <h4 className="tech title-section"><b>03 </b> space launch 101 </h4>
      <section className="tech section-article">
      <form className="selecteeds-tech">
          <label className={selected === "1" ? "active" : ""}>
         <input 
          type="radio"
          name="1"
          value="1"
          checked = { selected === "1" }
          onChange={handdleSelected}
          required />
            1
        </label>
        <label className={selected === "2" ? "active" : ""}>
         <input 
          type="radio"
          name="2"
          value="2"
          checked = { selected === "2" }
          onChange={handdleSelected}
          required />
            2
        </label>
        <label className={selected === "3" ? "active" : ""}>
         <input 
          type="radio"
          name="3"
          value="3"
          checked = { selected === "3" }
          onChange={handdleSelected}
          required />
            3
        </label>
      </form>
    {info &&
      <InfoArticle
      title1={info.title}
      classTitle1="title-xl"
      title2="the technology"
      classTitle2="title-name"
      description={info.description}
      />
    }      
      </section>
      <section className="tech section-graphic">
        <img src={info.img}/>

      </section>
    </>
  )
}
