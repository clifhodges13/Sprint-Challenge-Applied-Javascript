// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articles_URL = 'https://lambda-times-backend.herokuapp.com/articles'

axios.get(articles_URL)
  .then(response => {
    const articles = response.data.articles
    const bootstrap = articles.bootstrap
    const javascript = articles.javascript
    const jquery = articles.jquery
    const node = articles.node
    const technology = articles.technology

    const articlesArray = [bootstrap, javascript, jquery, node, technology]
    // console.log(response)
    return articlesArray
  })
  .then(articlesArray => {
    articlesArray.forEach(article => {
      // console.log(article)
      article.forEach(item => {
        Card(item, cardsContainer)
      })
    })
  })
  .catch(error => {
    console.log(error)
  })




const cardsContainer = document.querySelector('.cards-container')

function Card(article, parent){
  const card = document.createElement('div')
  card.classList.add('card')
  parent.appendChild(card)

  const headline = document.createElement('h1')
  headline.classList.add('headline')
  headline.textContent = article.headline
  card.appendChild(headline)

  const author = document.createElement('div')
  author.classList.add('author')
  card.appendChild(author)

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  author.appendChild(imgContainer)

  const img = document.createElement('img')
  img.src = article.authorPhoto
  imgContainer.appendChild(img)

  const authorName = document.createElement('span')
  authorName.textContent = `By ${article.authorName}`
  author.appendChild(authorName)
}