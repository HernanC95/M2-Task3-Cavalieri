let fechaActual = data.currentDate;
let eventos = data.events;
console.log(eventos);

function getEvents() {
  return data.events;
}

let container = document.getElementById("container");
/* let todosLosEventos = getEvents().forEach(imprimirCartas) */
function imprimirCartas(carta) {
  let article = document.createElement("article");
  article.innerHTML += `    <div class="card h-100" style="width: 18rem">
      <img
        src="${carta.image}"
        class="card-img-top p-2 h-50 rounded-4"
        alt="${carta.name}"
      />
      <div
        class="card-body d-flex flex-column align-items-center justify-content-between"
      >
        <h5 class="card-title">${carta.name}</h5>
        <p class="card-text text-center">${carta.description}</p>
        <div
          class="d-flex w-100 justify-content-between align-items-center"
        >
          <p class="m-0">Price: ${carta.price}</p>
          <a href="#" class="btn btn-secondary">Details</a>
        </div>
      </div>
    </div>`;
  container.appendChild(article);
}

const inputSearch = document.getElementById("js-search");
inputSearch.addEventListener("input", function (event) {
  let aux = getEvents().filter((evento) =>
    evento.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  container.innerHTML = ``;
  aux.forEach(imprimirCartas);
});

const arrayDeCheckboxIds = [
  "foodfair",
  "museum",
  "costumeparty",
  "musicconcert",
  "race",
  "bookexchange",
  "cinema",
];

const checkBoxFF = document.getElementById("foodfair");

checkBoxFF.addEventListener('change', function (evnt) {
    if (evnt.target.checked){
      getEvents().filter(function (event) {
        if (event.category === "Food Fair") {
          imprimirCartas(event);
        }
      })
    }
    else{
      container.innerHTML = ``;
    }
})

