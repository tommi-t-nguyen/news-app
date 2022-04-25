import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({id, byline, title, image }) => {
  return (
    <Link to={`/article/${id}`}>
    <div className='article-card'>
    <div>
    <p>{title}</p>
    <p>{byline}</p>
    </div>
    <img src={image} alt={title}/>
    </div>
    </Link>
  )
}

export default Card
