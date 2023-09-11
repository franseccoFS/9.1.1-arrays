// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

function filterAndSortArray(array) {
  const filteredArray = array.filter((element) => typeof element === 'string');
  filteredArray.sort((a, b) => a.localeCompare(b));
  return filteredArray;
}

document.addEventListener("DOMContentLoaded", (e) => {
  const filteredAndSortedArray = filterAndSortArray(strangeArray);
  showList(filteredAndSortedArray);
});
