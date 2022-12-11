// "use strict";

const imageUrl = document.querySelector("#imageUrl");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const addForm = document.querySelector("#add-form");
const deleteBtn = document.querySelector("#deleteBtn");

let num = 0;

const save = document.querySelector("#save-btn");
  save.addEventListener("click", (e) =>  generateCard(e));

const displayCoffee = document.querySelector(".row");

function generateCard(e) {
  // e.preventDefault();
  num++;

  let contentCard = `
  <div class="col-md-3" id="${num}">
  <div class="card">
    <img src="${imageUrl.value}" class="card-img-top" alt="Hot Coffee" />
    <div class="card-body">
      <div class="card-title">${title.value}</div>
      <div class="card-text">${description.value}</div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
        Update
      </button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteModal">
        Delete
      </button>
    </div>
  </div>
</div>
          `;
  displayCoffee.insertAdjacentHTML("afterbegin", contentCard);
  addForm.reset();
}

displayCoffee.addEventListener('click', (e) => {
  let selected = e.target.offsetParent.parentElement.id;
  let parent = e.target.offsetParent.parentElement;
  console.log(e, e.target.offsetParent.parentElement.id);
  if (e.target.innerText === "Delete") {
    deleteCard(selected);
  }
  else if (e.target.innerText === "Update") {
    updateCard(parent);
  }
})

// Delete
function deleteCard(selected) {
  deleteBtn.addEventListener('click', () => {
    document.getElementById(selected).remove();
  })
}

// Update
const updateImg = document.querySelector("#updateImg");
const updateInputTitle = document.querySelector("#updateInputTitle");
const updateInputDesc = document.querySelector("#updateInputDesc");
const updateForm = document.querySelector("#update-form")

const updateBtn = document.querySelector("#update-btn")
  // .addEventListener("click", (e) => console.log(e.target));

function updateCard(parent) {
  // e.preventDefault();
  console.log(parent);
  updateBtn.addEventListener('click', () => {
    document.getElementById(parent.id).remove();
    // console.log(document.getElementById(parent.id));
    num++;
  let contentCard = `
  <div class="col-md-3" id="${num}">
  <div class="card">
    <img src="${updateImg.value}" class="card-img-top" alt="Hot Coffee" />
    <div class="card-body">
      <div class="card-title">${updateInputTitle.value}</div>
      <div class="card-text">${updateInputDesc.value}</div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
        Update
      </button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteModal">
        Delete
      </button>
    </div>
  </div>
</div>
          `;
  displayCoffee.insertAdjacentHTML("beforeend", contentCard);
  updateForm.reset();
})
}
