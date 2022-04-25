import React from 'react';
import Card from '../Card/Card.js'

const ArticlesContainer = ({articles}) => {
  const card = articles.map((article, key) => {
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
    <div>{card}</div>
  )
}

export default ArticlesContainer
