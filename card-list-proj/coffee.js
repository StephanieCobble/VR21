"use strict";

const imageUrl = document.querySelector("#imageUrl");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const addForm = document.querySelector("#add-form")

let num = 0;

const save = document
  .querySelector("#save-btn")
  .addEventListener("click", generateCard);

const displayCoffee = document.querySelector(".row");

function generateCard(e) {
  // e.preventDefault();
  num++;

  let contentCard = `
  <div class="col-md-3">
  <div class="card">
  <img
  src='${imageUrl.value}'
  class="card-img-top"
  alt="Hot Coffee" />
  <div class="card-body">
  <h5 class="card-title">${title.value}</h5>
  <p class="card-text">
     ${description.value}
  </p>
  <div class="btn-container">
  <button
  type="button"
  id='${num}'
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#updateModal">
  Update
  </button>
  &nbsp;
  <button
  type="button"
  class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#deleteModal">
          Delete
          </button>
          </div>
          </div>
          </div>
          </div>
          `;

  let makeDiv = document.createElement("div");
  // makeDiv.setAttribute("id", `${num}`);
  makeDiv.setAttribute("data-coffee-id", `${num}`);
  
  displayCoffee.append(makeDiv);

  // url = imageUrl.value;
  // titleStr = title.value;
  // descStr = description.value;

  makeDiv.insertAdjacentHTML("beforeend", contentCard);
  addForm.reset();
  addForm.close();
}

// Update
const updateImg = document.querySelector("#updateImg");
const updateInputTitle = document.querySelector("#updateInputTitle");
const updateInputDesc = document.querySelector("#updateInputDesc");

const updateBtn = document
  .querySelector("#update-btn")
  .addEventListener("click", (e) => console.log(e.target));

function updateCard(e) {
  e.preventDefault();
  document.getElementById(`${e.target.id}`).remove();
  let contentCard = `
  <div class="col-md-3">
  <div class="card">
  <img
  src='${updateImg.value}'
  class="card-img-top"
  alt="Hot Coffee" />
  <div class="card-body">
  <h5 class="card-title">${updateInputTitle.value}</h5>
  <p class="card-text">
     ${updateInputDesc.value}
  </p>
  <div class="btn-container">
  <button
  type="button"
  class="btn btn-primary"
  id='${num}'
  data-bs-toggle="modal"
  data-bs-target="#updateModal">
  Update
  </button>
  <button
  type="button"
  class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#deleteModal">
          Delete
          </button>
          </div>
          </div>
          </div>
          </div>
          `;
  // const updateDisplayCoffee = document.querySelector(".row");
  let makeDiv = document.createElement("div");
  makeDiv.setAttribute("id", `${num}`);
  displayCoffee.append(makeDiv);

  makeDiv.insertAdjacentHTML("beforeend", contentCard);
}
//--------------------------------------------------------------------------------------


//  document.querySelector("#add-button").addEventListener("click", (e) => {
//   e.preventDefault();
//   const contentCard = `
//           <div class="col-md-3">
//           <div class="card">
//           <img
//           src="https://images.unsplash.com/photo-1519333796630-4b7d19ad1bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
//           class="card-img-top"
//           alt="Hot Coffee" />
//           <div class="card-body">
//           <h5 class="card-title">Hot Coffee</h5>
//           <p class="card-text">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Provident, consequatur.
//           </p>
//           <div class="btn-container>
//           <button
//           type="button"
//           class="btn btn-primary"
//           data-bs-toggle="modal"
//           data-bs-target="#updateModal">
//           Update
//           </button>
//           <button
//           type="button"
//           class="btn btn-primary"
//                   data-bs-toggle="modal"
//                   data-bs-target="#deleteModal">
//                   Delete
//                   </button>
//                   </div>
//                   </div>
//                   </div>
//                   </div>
//                   `;
//   const cardColumn = document.createElement("div");
//   cardColumn.setAttribute("class", "col-md-3");
//     const card = document.createElement('div');
//     card.setAttribute('class', 'card');

//     const img = document.createElement('img');
//     img.setAttribute('src', "https://images.unsplash.com/photo-1519333796630-4b7d19ad1bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80");
//     img.setAttribute("class", 'card-img-top');

//     const cardBody = document.createElement('div');
//     cardBody.setAttribute('class', 'card-body');

//     const title = document.createElement('h5');
//     title.setAttribute('class', 'card-title');
//     title.innerText= 'Card Title';

//     const p = document.createElement('p');
//     p.setAttribute('class', 'card-text');
//     p.innerText = 'this is a test paragraph';

//     const btnContainer = document.createElement('div');
//     btnContainer.setAttribute('class', 'btn-container');

//     card.append(img);

//     card.append(cardBody);

//     cardBody.append(title);
//     cardBody.append(p);
//     cardBody.append(btnContainer);

//     const updateBtn = document.createElement('button');
//     updateBtn.innerText = 'Update'
//     updateBtn.setAttribute('class', 'btn btn-primary');
//     updateBtn.setAttribute('data-bs-toggle', '#modal');
//     updateBtn.setAttribute('data-bs-target', '#updateModal');

//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete'
//     deleteBtn.setAttribute('class', 'btn btn-primary');
//     deleteBtn.setAttribute('data-bs-toggle', '#modal');
//     deleteBtn.setAttribute('data-bs-target', '#deleteModal');

//     btnContainer.append(updateBtn);
//     btnContainer.append(deleteBtn);

//     cardColumn.append(card);

//     document.querySelector('.row').append(cardColumn);

// //   document.querySelector(".row").insertAdjacentHTML("beforeend", contentCard);
//   //   document.querySelector('.row').innerHTML = contentCard;
//   document.querySelector('#save-btn').addEventListener('click', contentCard);
// });
//-----------------------------------------------------------------------------------------------
//   const addCard = () => {
//     document.querySelector('#add-button').addEventListener('click', (e) => {
//         const div = document.createElement('div');
//         // div.innerText = "My info card";
// document.querySelector('.row').insertAdjacentHTML('beforeend', contentCard);

//         document.querySelector('.row').append(div);
//     });
//   };

// // To create an element
// const cardColumn = document.createElement("div");
// cardColumn.setAttribute("class", "col-md-3");
// cardColumn.innerText = "Card One";

// // const card = document.createElement('div');
// // card.setAttribute('class', 'card')

// // To append an element
// const row = document.querySelector(".row");
// row.append(cardColumn);
