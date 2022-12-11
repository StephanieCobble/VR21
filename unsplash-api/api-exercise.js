// get api key
//capture search term

//make a req to unsplash api

// capture api data

// loop over the data
// append to the dom
const client_id = "9WZGfUCuR_LYgjZ-8CQJjk2AE0akdVou0MfHW1_jrn4"; // Create an account unsplash tp hey client ID (access key);
const searchStr = "coffee";
const urlStr = `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`;
const container = document.querySelector(".row");

const search = document.querySelector("#search");
let userSearch;
const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', getResults);


function getResults(e) {
    e.preventDefault();
    document.querySelectorAll('.col-md-3').forEach(item => item.remove());
    userSearch = search.value;
    // console.log(userSearch);
  fetch(
    `https://api.unsplash.com/search/photos?query=${userSearch}&per_page=20&client_id=${client_id}`
  )
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

      for (let i = 0; i < data.results.length - 1; i++) {
        const url = data.results[i].urls.thumb;
        const title = data.results[i].tags[0].title;
        const desc = data.results[i].description;

        //   const img = document.createElement("img");
        //   img.setAttribute("src", url);
        const img = `
        <div class="col-md-3">
          <div class="card">
            <img src="${url}" class="card-img-top" alt="Hot Coffee" />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${desc}</p>
              <div class="btn-container">
              </div>
            </div>
          </div>
        </div>
    `;
        //   img.setAttribute("src", url);
        container.insertAdjacentHTML("beforeend", img);
    }
});
};

// fetch(urlStr)
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.querySelector(".container");

//     for (let i = 0; i < data.results.length - 1; i++) {
//       const img = document.createElement("img");

//       img.setAttribute("src", data.results[i].urls.thumb);

//       container.append(img);
//     }
//   });


fetch(urlStr)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // const container = document.querySelector(".row");

    for (let i = 0; i < data.results.length - 1; i++) {
      const url = data.results[i].urls.thumb;
      const title = data.results[i].tags[0].title;
      const desc = data.results[i].description;

      //   const img = document.createElement("img");
      //   img.setAttribute("src", url);
      const img = `
    <div class="col-md-3">
      <div class="card">
        <img src="${url}" class="card-img-top" alt="Hot Coffee" />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${desc}</p>
          <div class="btn-container">
          </div>
        </div>
      </div>
    </div>
`;
      //   img.setAttribute("src", url);

      container.insertAdjacentHTML("beforeend", img);
    }
  });

