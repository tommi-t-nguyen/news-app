import React, { useState, useEffect} from 'react'
import { fetchAll } from '../../apiCalls.js'

const Home = () => {

  useEffect(()=> {
    fetchAll()
      .then(data => console.log(data.results))
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home
