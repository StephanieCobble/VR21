
const arrayOfObjects = [
  { name: "Holo Taco", link: "holotaco.com" },
  { name: "Makartt", link: "makartt.com" },
  { name: "ILNP", link: "ilnp.com" },
];

const searchQuery = document.querySelector('#search');
const listEl = document.querySelector('#arrList');
const resultsHTML = document.querySelector('.outputList')

search.oninput = function(e) {
    let res = [];
    // console.log(e.target.value)
    const userInput = this.value;
    resultsHTML.innerHTML = '';
    if (userInput.length > 0) {
        res = getResults(userInput);
        for (i=0; i< res.length; i++) {
            // console.log(res);
            resultsHTML.innerHTML += `<li> ${res[i]} </li>`; 
        }
    }
}

function getResults(input) {
    let res = [];
    arrayOfObjects.map(obj => {
        // console.log('here')
        for (i=0; i<obj.name.length; i++) {
            let letter = obj.name[i];
            console.log(input, letter)
            if (input === obj.name.slice(0, input.length)) {
                res.push(letter);
                console.log('here')
            }
        }
        for (j=0; j<obj.link.length; j++) {
            let letter2 = obj.link[j];
            if (input === obj.link.slice(0, input.length)) {
                res.push(letter2);
                // console.log(arrayOfObjects.link[j], 'line 38')
            }
        }
    })
    return res;
}

resultsHTML.onclick = function(e) {
    const setVal = e.target.innerText;
    search.value = setVal;
    this.innerHTML = '';
}