let eventos = data.events;

function getEvents() {
  return data.events;
}

let container = document.getElementById("container");
function imprimirCartas(carta) {
  let article = document.createElement("article");
  article.innerHTML += ` 
                <article class="d-flex flex-column justify-content-center align-items-center text-white border p-4 colorHeader rounded-5" style="width: 25rem">
                    <h1 class="p-2">${carta.name}</h1>
                    <img src="${carta.image}" class="rounded-5 p-3" style="width: 25rem" alt="${carta.name}"></img>
                    <div class="d-flex flex-wrap justify-content-between w-100">
                    <p>Fecha: ${carta.date}</p>
                    <p>Categoria: ${carta.category}</p>
                    </div>
                    <p class="text-center">
                    ${carta.description}
                    </p>
                    <div class="d-flex flex-wrap justify-content-between w-75">
                      <p>Place: ${carta.place}</p>
                      <p>Price: ${carta.price}</p>
                    </div>
                </article>`;

  container.appendChild(article);
}

async function getEvents1() {
  let id = Number(location.search.slice(4));
  console.log(id);
  let event = getEvents().filter((evento) => evento._id === id);
  imprimirCartas(event[0]);
}

getEvents1();
