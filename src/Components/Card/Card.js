import React from 'react'

const Card = ({id, byline, title, image }) => {
  return (
    <div>
    <p>{title}</p>
    <p>{byline}</p>
    <img src={image}/>
    </div>
  )
}

export default Card
