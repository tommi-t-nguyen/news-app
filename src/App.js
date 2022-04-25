import React, { useState, useEffect}  from 'react';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer.js';
import Error from './Pages/Error/Error.js';
import Detail from './Pages/Detail/Detail.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchAll } from './apiCalls.js'
import { cleanData } from './utils.js'

const App = () => {
  const [articles, setArticles] = useState('')
  const [filteredArticles, setFilteredArticles] = useState('')

  useEffect(()=> {
    fetchAll()
      .then(data => cleanData(data.results))
      .then(data => setArticles(data))
  }, []);

  const selectArticle = (id) => {
    return articles.find(article => article.id == id)
  }

  const getFilteredArticles = (inputValue) => {
  let filteredArticles = articles.filter(article => article.title.toLowerCase().includes(inputValue.toLowerCase()))
  setFilteredArticles([...filteredArticles])
}

  return (
    <main className='App'>
    {!articles ? (<div> Loading...</div>) :(
    <Switch>
      <Route
        exact path='/'
        render={() => <ArticlesContainer articles={articles} filteredArticles={filteredArticles} getFilteredArticles={getFilteredArticles} />}
      />
      <Route
        exact path='/article/:id'
        render={({match}) => {
          const currentArticle = selectArticle(match.params.id)
          if(!currentArticle){
            return <p>Loading...</p>
          }
          return <Detail article={currentArticle}/>
        }}
      />
      <Route path='/error' component={Error}/>
      <Redirect to='/error'/>
    </Switch>
  )}
  </main>
  )
}

export default App
