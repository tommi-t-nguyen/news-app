import React, { useState, useEffect}  from 'react';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer.js';
import Error from './Pages/Error/Error.js';
import Detail from './Pages/Detail/Detail.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchAll } from './apiCalls.js'
import { cleanData } from './utils.js'

const App = () => {
  const [articles, setArticles] = useState('')

  useEffect(()=> {
    fetchAll()
      .then(data => cleanData(data.results))
      .then(data => setArticles(data))
  }, []);

  return (
    <main className='App'>
    {!articles ? (<div> Loading...</div>) :(
    <Switch>
      <Route
        exact path='/'
        render={() => <ArticlesContainer articles={articles}/>}
      />
      <Route
        exact path='/article/:id'
        render={({match}) =>
        <Detail id={match.params.id}/> }
      />
      <Route path='/error' component={Error}/>
      <Redirect to='/error'/>
    </Switch>
  )}
  </main>
  )
}

export default App
