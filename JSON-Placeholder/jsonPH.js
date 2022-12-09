let response = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
// append data to dom

const container = document.querySelector("#json-ph");

// {response.map((data) => {
// })}


function displayJSON() {
  const show = `
         <div>
               <div>
               <p>{data.userId}</p>
               <p>{data.title}</p>
               <p>{data.completed}</p>
               </div>
       </div>
  `;
  container.append(show);
}

