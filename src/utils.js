const cleanData = (data) => {
  return data.map((article, index) => {
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
