import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className="error">
      <h2>404 PAGE NOT FOUND</h2>
    <Link to={'/'}>Back Home</Link>
    </div>
  )
}

export default Error
