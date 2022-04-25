import React from 'react'

const Detail = ({article}) => {
  console.log(article)
  return (
    <section className='article-details'>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <img src={article.image}/>
      <a href={article.url}>Link to article</a>
    </section>
  )
}

export default Detail
