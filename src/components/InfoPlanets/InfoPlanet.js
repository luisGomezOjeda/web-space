import React from 'react'

export const InfoPlanet = ({ title, article, distanceKm, distanceTime }) => {



  return (
    <>
    <article>
     <h3 className='title-planet'>{title}</h3>
     <p>{article}</p>
    </article>
    <article className='distance-planet'>
       <div>
        <span>Avg.distance</span> <br/>
        <b>{distanceKm}</b>
       </div>
       <div>
        <span>Est.travel time</span> <br/>
        <b >{distanceTime}</b>
       </div>
    </article>
    </>
  )
}
