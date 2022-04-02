console.log("This is my index js file");

// Initialize the news api parameters
let apiKey = "015032c85150475b9510137a646fb8d8";

// Grabbing the buttons by their unique IDs
let india = document.getElementById("india");
let usa = document.getElementById("usa");
let korea = document.getElementById("sKorea");
let ukraine = document.getElementById("ukraine");
let newZealand = document.getElementById("newZealand");
let australia = document.getElementById("australia");
let ipl = document.getElementById("ipl");

// Populating the webpage for the first time with Indian News as default
let https = `https://newsapi.org/v2/everything?q=India&apiKey=${apiKey}`;
ajaxRequest(https);

// Getting news for India
india.addEventListener("click", () => {
  let country = "in";
  let https = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  ajaxRequest(https);
});

// Getting news for USA
usa.addEventListener("click", () => {
  let country = "us";
  let https = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  ajaxRequest(https);
});

// Getting news for IPL
ipl.addEventListener("click", () => {
  let country = "in";
  let https = `https://newsapi.org/v2/top-headlines?country=${country}&q=ipl&apiKey=${apiKey}`;
  ajaxRequest(https);
});

// Getting news for New Zealand
newZealand.addEventListener("click", () => {
  let country = "nz";
  let https = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  ajaxRequest(https);
});

// Getting news for Australia
australia.addEventListener("click", () => {
  let country = "au";
  let https = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  ajaxRequest(https);
});

// Getting news for South Korea
korea.addEventListener("click", () => {
  let country = "kr";
  let https = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  ajaxRequest(https);
});

// Getting news for Ukraine
ukraine.addEventListener("click", () => {
  let country = "ua";
  let https = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  ajaxRequest(https);
});

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Trial URL for getting different news
// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
// https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

// Create a function to get an ajax get request
function ajaxRequest(https) {
  xhr = new XMLHttpRequest();
  xhr.open("GET", https, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let newsHtml = "";
      articles.forEach(function (element, index) {
        // console.log(element, index)
        let news = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>News ${index + 1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>
        
        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${
          element["url"]
        }" target="_blank" >Read more here</a>  </div>
    </div>
                        </div>`;
        newsHtml += news;
      });
      newsAccordion.innerHTML = newsHtml;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
}
