/*
===========================>
KAROL MOISÉS GUTIÉRREZ RÍOS
Professional en Coding
Devf
===========================>
main.js
*/

//////////////////////////////////////////////////////////////////////
//Asignacion de variables 
let search_input = document.getElementById("search_input");
let container = document.getElementById("container");
let json = JSON.parse(listaPokemones);
let pokemones = json.results;

//////////////////////////////////////////////////////////////////////
//Funcion Search() manda a llamar funcion searchPokemones()
function search() {
  console.log(search_input.value);

  let pokemon = search_pokemon(search_input.value);
  const elementoPadreContenedor = document.getElementById("ElementoPadreContenedor"); //Elemento HTML(div)
  const elementoHijoContenedor = document.createElement("div");

  elementoHijoContenedor.classList.add("borde-consulta","fondo-consulta", "col-4","d-flex", "flex-column", "d-block", "mx-auto");
  //Se crean elementos de contenedor hijo
  elementoHijoContenedor.innerHTML = `
    <h1 class="centrar-texto">  Consulta:</h1>
    <p  class = " centrar-texto d-block mx-auto font">
    Nombre: ${pokemon.name}<br/>
    Height: ${pokemon.height}<br/>
    Debilidad: ${pokemon.weakness[0]}<br/>
    <img class="img-fluid rounded d-block backgroundPokemon" 
          src="${pokemon.ThumbnailImage}" 
          alt= "#"> 
    </p>
    `;
  //Se agregan elementos del contenedor Hijo al Padre
  elementoPadreContenedor.appendChild(elementoHijoContenedor);

}

//////////////////////////////////////////////////////////////////////
// Funcion busca Pokemon
function search_pokemon(pokemon_name) {
  let elimina = 0;

  for (let i = 0; i < pokemones.length; i++) {
    //console.log(pokemones[i].name)
    //Tamaño: ${pokemon.number}<br/>

    if (pokemones[i].name == pokemon_name) {
      return pokemones[i];
    }

    else {
      elimina - 1;
    }

  }

  if (elimina - 1) {
    return eliminaElemento();
  }
}

//////////////////////////////////////////////////////////////////////
//Limpia HTML de contenedor Padre
function eliminaElemento() {
  const elementoPadreContenedor = document.getElementById("ElementoPadreContenedor");
  elementoPadreContenedor.innerHTML = "";
}
console.log(pokemones);

//////////////////////////////////////////////////////////////////////
//Despliega galeria de Pokemones
pokemones.forEach(function (pokemon) { //Recorre archivo jSON
  console.log(pokemon.name);
  const elementoPadre = document.getElementById("elementoPadre"); //Elemento HTML(div)
  const elementoHijo = document.createElement("div");
  elementoHijo.classList.add("margin", "d-flex", "flex-column", "d-block", "mx-auto");

  //Inserta elementos en Div Hijo 
  elementoHijo.innerHTML = `
            
            <h3 class ="font" style="text-align: center">${pokemon.name} </h3>
            <img class="img-fluid rounded  backgroundPokemon d-block mx-auto" src="${pokemon.ThumbnailImage}" alt="">
            <p class = " font d-block mx-auto"> Número: ${pokemon.number}</p>
            `;

  elementoPadre.appendChild(elementoHijo);

})