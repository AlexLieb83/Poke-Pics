//TO DO
//return more info about pokemon - type, weak against/ strong against, move set, which gen
//show evolves from, evolves to
//maybe add a button 'Try for a shiny!', if win - 'You had a 1/? chance to find me!', better luck next time, you had a 1/? chance to find me.
//make css better - box in moveset, make picture and words align better, etc.

document.querySelector("#search").addEventListener("click", getPokemon);

function capFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
          <img
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="${data.name}"
          />
        </div>
        <div class="pokemonInfo">
          <h1>${capFirstLetter(data.name)}</h1>
          <p>Weight: ${data.weight}</p>
          <p>Primary Type: ${data.types[0].type.name.toUpperCase()}</p>
          <p>Base Attack: ${data.stats[1].base_stat}</p>
        </div>
      `;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });

  //prevent default from event
  e.preventDefault();

  //reset search box text after search
  document.querySelector("#pokemonName").value = "";
}
