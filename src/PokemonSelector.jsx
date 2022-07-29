import React, { useState, useEffect }  from 'react';
const Pokedex = require("pokeapi-js-wrapper");


//component that holds title and 3 buttons
function PokemonSelector(props) {
    //chooseSnippet:start new game, records snippet text as state in app.js

    const { clearPokedex, setChosenPoke, chosenDex } = props;

//pokedex options
const [pokemonList, setPokemonList] = useState([]);
//error boolean
const [error, setError] = useState(false);

  //fetches api data on first render and stores it in pokedexes
  useEffect(function() {
    const P = new Pokedex.Pokedex();
      async function fetchData() {
          await P.getPokedexByName(chosenDex).then( response =>  setPokemonList(response.pokemon_entries)  ) 
              .catch(err => setError(err))
      }
      fetchData();
  }, []);



  if (!error){
    return (
      <ul>
<button onClick={clearPokedex}>Back</button>
<h1>Pokemon List:</h1>
{pokemonList.map(({ pokemon_species}) => <li key={pokemon_species.name.toString()}><p >{pokemon_species.name}</p><button onClick={() => setChosenPoke(pokemon_species.name)}>View Details</button></li>)}
</ul>
    )
  } else {
    return (
      <p>"An error has occured with the pokemon API"</p>
    )
  }

  
}

export default PokemonSelector;
