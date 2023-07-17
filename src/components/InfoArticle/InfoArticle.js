import React from 'react'

export const InfoArticle = ({title1,classTitle1,title2,classTitle2,description}) => {
  return (
    <article>
     <h4 className={classTitle2}>{title2}</h4>
     <h2 className={classTitle1}>{title1}</h2>
     <p>{ description }</p>
    </article>
  )
}
