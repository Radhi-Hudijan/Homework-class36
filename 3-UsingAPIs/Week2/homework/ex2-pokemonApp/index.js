'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Could not Fetch');
  }
  return response.json();
}

async function fetchAndPopulatePokemons() {
  const pokemonData = await fetchData('https://pokeapi.co/api/v2/pokemon/');
  const pokemons = pokemonData.results;
  const select = document.createElement('select');
  select.classList.add('select');

  select.addEventListener('change', (e) => {
    fetchImage(e.target.value);
  });
  document.body.appendChild(select);

  pokemons.forEach((pokemon) => {
    const option = document.createElement('option');
    option.classList.add('option');
    option.textContent = pokemon.name;
    option.value = pokemon.name;
    select.appendChild(option);
  });
}

async function fetchImage(pokemonName) {
  try {
    const imgUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    const data = await fetchData(imgUrl);
    if (document.querySelector('img')) {
      document.body.removeChild(document.querySelector('img'));
    }

    const pokemonImg = document.createElement('img');
    pokemonImg.src = data.sprites.front_default;
    pokemonImg.alt = `${pokemonName}`;
    document.body.appendChild(pokemonImg);
  } catch (err) {
    console.log(err);
  }
}

function main() {
  const btnElement = document.createElement('button');
  btnElement.classList.add('button');
  btnElement.type = 'submit';
  btnElement.textContent = 'Get Your Pokemon';
  document.body.appendChild(btnElement);
  btnElement.onclick = () => {
    fetchAndPopulatePokemons();
    btnElement.disabled = true;
  };
}

window.addEventListener('load', main);
