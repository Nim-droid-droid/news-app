//TODO
// Render content from the API soon as page loads (user sends GET request)

// Dynamically generate divs (news cards in a row)
fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=18d27847179749a68297ae382663101f')
.then(res => res.json())  // parse response as JSON
.then(data => {
  console.log(data)}
  )
  .catch(err => console.log(`Error is ${err}`)) 

// add event handler
const filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', filterTopic);

function filterTopic(){
  let searchInputTxt = document.getElementById('searchInput').value.trim()

  fetch(`https://newsapi.org/v2/everything?q=${searchInputTxt}&apiKey=18d27847179749a68297ae382663101f`)
  .then(res => res.json())  // parse response as JSON
  .then(data => {
    // console.log(data)

    // from the 1st object in articles obj grab its title property
    // console.log(data.articles[0].title)
    // console.log(data.articles[0].publishedAt)
    
    // document.querySelector('p').innerText = data.articles[0].title
    
    let main = '';
    if(data.articles){
      data.articles.forEach(obj => {
        main +=
          `<div class = "newsCard" data-id = "${obj.title}">
            <div class = "newsInfo">
              <h3>${obj.publishedAt}</h3>
              <p>Description</p>
              <span>By Author</span>
            </div>
          </div>
          `;
      });
    }
  })
  .catch(err => console.log(`Error is ${err}`)) 
}