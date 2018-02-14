const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;


form.addEventListener('submit',function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=e6b34e070bfe47d493dda1b0af6dee85`)
  .then(function (response) {
    console.log(response);
    return response.json()
  }).then(function(data) {
    console.log(data);
    const article = data.response.docs;
    
      for (const doc of article) {
        console.log(doc);
      
     const title = doc.headline.main;
      const snippet = doc.snippet;
    
      let li = document.createElement('li');
      li.innerText = snippet;
    
      responseContainer.appendChild(li);
      }
  })
  
});

