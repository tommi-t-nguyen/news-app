import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id, byline, title, image }) => {
  return (
    <Link to={`/article/${id}`}>
    <div>
    <p>{title}</p>
    <p>{byline}</p>
    <img src={image}/>
    </div>
    </Link>
  )
}

export default Card
