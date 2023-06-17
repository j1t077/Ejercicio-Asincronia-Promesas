//CODIGO BUENO
// fetch('../titulos.json')
//   .then(response => response.json())
//   .then(data => {
//     data.results.forEach(todo => console.log(todo.title));
//   });

// const path = '../titulos.json';

// async function getData() {
//  const response = await fetch(path);
//  const data = await response.json()
//   console.log(data.results);
// }

// getData();

const loadJSON = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const tableBody = document.getElementById("table-body");

loadJSON("../titulos.json")
  .then((data) => {
    data.results.forEach((todo) => {
      const row = document.createElement("tr");
      const titleCell = document.createElement("td");
      titleCell.textContent = todo.title;
      const priorityCell = document.createElement("td");
      priorityCell.textContent = todo.priority;
      const isDoneCell = document.createElement("td");
      isDoneCell.textContent = todo.isDone ? "Sí" : "No";

      row.appendChild(titleCell);
      row.appendChild(priorityCell);
      row.appendChild(isDoneCell);
      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });
