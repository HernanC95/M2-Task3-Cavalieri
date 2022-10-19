let fechaActual = data.currentDate;
let eventos = data.events;

function getEvents(){
  return data.events
}



let eventosPasados = getEvents().filter(event => event.date <= fechaActual)

let container = document.getElementById("container");

eventosPasados.forEach(imprimirCartas)

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
          <a href="details.html?id=${carta._id}" class="btn btn-secondary">Details</a>
        </div>
      </div>
    </div>`;
  container.appendChild(article);
}

const inputSearch = document.getElementById ("js-search")
inputSearch.addEventListener("input", function (event) {
 let aux =eventosPasados. filter((evento) => evento.name.toLowerCase().includes(event.target.value.toLowerCase()))
  container.innerHTML = ``
  aux.forEach(imprimirCartas)
}) 

let check = document.querySelectorAll('.form-check-input')
for (let element of check) {
  element.addEventListener(
    'click',
    () => search(eventosPasados)
  )
}

function search (eventosPasados){
  let checks = document.querySelectorAll('.form-check-input:checked')
  let filterArray = []
  checks.forEach(categoria => {
    let newArray = eventosPasados.filter(evento => evento.category===categoria.value)
    filterArray = filterArray.concat(newArray)
  })
  console.log(filterArray)
  if (filterArray.length === 0){
    filterArray = eventosPasados
  }
  container.innerHTML = ``;
  filterArray.forEach(imprimirCartas)
}