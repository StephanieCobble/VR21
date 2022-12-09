// https://rithm-students-assets.s3.us-west-1.amazonaws.com/tlg/exercises/meme-gen/handout/index.html


// const memeForm = document.createElement("form");
// const container = document.querySelector("#container");

const memeForm = document.querySelector('#meme-form'); 

const imgUrl = document.querySelector("#imgUrl"); 

const formInputTextTop = document.querySelector("#text-top");

const formInputTextBottom = document.querySelector("#text-bottom");

const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", generateMeme);


function generateMeme(e) {
  e.preventDefault();
  const displayCard = `
        <div class='col-md-3'>
        <div class='card'>
        <img src='${imgUrl.value}'>
        <p id="top-gen">${formInputTextTop.value}</p>
        <p id="bottom-gen">${formInputTextBottom.value}</p>
        </div>
        </div>
        `;
  const memeDisplay = document.querySelector(".row");
  memeDisplay.insertAdjacentHTML("beforeend", displayCard);

  memeForm.reset();

}


// // https://rithm-students-assets.s3.us-west-1.amazonaws.com/tlg/exercises/meme-gen/handout/index.html


// // const memeForm = document.createElement("form");
// // const container = document.querySelector("#container");

// const memeForm = document.querySelector('#meme-form').value; 

// const imgUrl = document.querySelector("#imgUrl").value; 

// const formInputTextTop = document.querySelector("#text-top").value;

// const formInputTextBottom = document.querySelector("#text-bottom").value;

// const addButton = document.querySelector("#add-button");
// addButton.addEventListener("click", generateMeme);

// let num = 0;
// const cardInfo = {imgUrl, formInputTextTop, formInputTextBottom, data-card-id:num++};  
// generateMeme(cardInfo);

// function generateMeme(e) {
//   e.preventDefault();
//   const displayCard = `
//         <div class='col-md-3'>
//         <div class='card'>
//         <img src='${imgUrl.value}'>
//         <p id="top-gen">${formInputTextTop.value}</p>
//         <p id="bottom-gen">${formInputTextBottom.value}</p>
//         <button type="button" class="btn btn-danger" id="delete-btn'>
//         Delete
//         </button> 
//         </div>
//         </div>
//         `;
//   const memeDisplay = document.querySelector(".row");
//   memeDisplay.insertAdjacentHTML("beforeend", displayCard);

//   memeForm.reset();
// }

// const deleteBtn = document.querySelector('#delete-btn');
// deleteBtn.addEventListener('click', deleteMeme);

// function deleteMeme(e) {
//   displayCard.remove();
// }
