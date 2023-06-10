// fetch('https://google.com')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// fetch('https://google.com', {
//   method: 'POST'
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


const apiKey = 'YOUR_API_KEY';
const cx = 'YOUR_CSE_ID';
const query = 'cats the musical';

// const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;
const url = `https://www.google.com/search?q=${query}`

fetch(url)
    .then(response => response.text())
    //   .then(data => console.log(data))
    .then(html => console.log(html.substring(10000, 12000)))
    .catch(error => console.error(error));

// Note that the Google Custom Search API is a paid service