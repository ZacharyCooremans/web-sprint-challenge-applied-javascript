import axios from "axios"
const Card = (article) => {
  console.log('THIS IS ARTICLE', article)
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // creat elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const img = document.createElement('div');
  const src = document.createElement('src');
  const authorName = document.createElement('span');

  //set names
  card.classList = 'card';
  headline.classList = 'headline';
  author.classList = 'author';
  img.classList = 'img-container'

  // set hierarchy
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(img);
  img.appendChild(src);
  author.appendChild(authorName);

  // set values
  headline.textContent = headline;
  author.textContent = `'author goes here', author`;
  //src.textContent = {authorPhoto};
  //authorName = `wga ${AUTHORNAME??}`;
  card.addEventListener('click', (event) =>{
    console.log(headline)
  })

  return card

}
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.append(Card());

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  selector = axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) =>{
    //console.log('RESPONSE: \n \n', res)
    //console.log('RESPONSE DATA: \n \n', res.data)
    //console.log('RESPONSE DATA ARTICLES: \n \n', res.data.articles.bootstrap)
    const data = res.data.articles.bootstrap
    data.forEach((article) =>{
      const itemCard = Card(article);
      cardsContainer.append(itemCard)
    });
    // const stuff = Card(data);
    // cardsContainer.append(stuff)
  })
  .catch((err) =>{
    console.log(err);
  });
}

export { Card, cardAppender }
