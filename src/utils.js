const cleanData = (data) => {
  const newData = data.filter(article => {
    if(article.multimedia){
      return article
    }
  })
  return newData.map((article, index) => {
    return {
      id: index,
      byline: article.byline,
      section: article.section,
      title: article.title,
      url: article.url,
      image: article.multimedia[0].url
    }
  })
}

export { cleanData }
