import React, { useEffect } from "react"
import "./home.css"

import {helpImport} from "../../helpers/helpImport"
import bgDesktop from "../../assets/home/background-home-desktop.jpg"
import bgTablet from "../../assets/home/background-home-tablet.jpg"
import bgMobile from "../../assets/home/background-home-mobile.jpg"

export const Home = ({handleBg}) => {
  
  useEffect(()=>{
    helpImport(bgDesktop, bgTablet,  bgMobile, handleBg)
  },[])

  return (
    <>
      <article className="home section-article">
        <h4 className="title-sm"><b>s0</b> you want to trave to</h4>
        <h3 className="title-md">space</h3>
        <p>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </article>
      <section className="home section-graphic">
        <button className="button-explorer">explore</button>
      </section>
    </>
  )
}
