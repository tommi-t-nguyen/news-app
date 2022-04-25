import React, { useState, useEffect} from 'react';
import Card from '../Card/Card.js'
import './ArticlesContainer.css'

const ArticlesContainer = ({ articles, filteredArticles, getFilteredArticles }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (event) => {
   setSearchInput({ ...searchInput, value: event.target.value })
   return getFilteredArticles(event.target.value)
 }

 let articlesToDisplay;
 if(filteredArticles.length) {
   articlesToDisplay = filteredArticles
 } else {
   articlesToDisplay = articles
 }

  const card = articlesToDisplay.map((article, key) => {
    return(
      <Card
        key={key}
        id={article.id}
        byline={article.byline}
        title= {article.title}
        image= {article.image}
      />
    )
  })
  return (
    <section className='article-container'>
     <input placeholder='Search Articles By Titles' onChange={ event => handleChange(event) } />
     {card}
   </section>
  )
}

export default ArticlesContainer
