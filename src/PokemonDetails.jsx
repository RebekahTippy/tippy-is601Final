import React, { useState, useEffect }  from 'react';
const Pokedex = require("pokeapi-js-wrapper");


//component that holds title and 3 buttons
function PokemonDetails(props) {
    //chooseSnippet:start new game, records snippet text as state in app.js

    const { clearPokemon, chosenPoke } = props;

    const P = new Pokedex.Pokedex();


//pokedex options
const [pokemonAbil, setPokemonAbilities] = useState([]);
const [pokemonImg, setPokemonImg] = useState([]);
const [pokemonStat, setPokemonStat] = useState([]);
const [pokemonType, setPokemonType] = useState([]);


//error boolean
const [error, setError] = useState(false);

  //fetches api data on first render and stores it in pokedexes
  useEffect(function() {
    
      async function fetchData() {
          await P.getPokemonByName(chosenPoke).then( response => {
            
            setPokemonAbilities(response.abilities)
            setPokemonImg(response.sprites.front_shiny)
            setPokemonStat(response.stats)
            setPokemonType(response.types)
           

          }
)
              .catch(err => setError(err))
      }
      fetchData();
  }, []);


    return (
<div>
<button onClick={clearPokemon}>Back</button>
<h1>Pokemon Details:</h1>
{error ? "An error has occured with the pokemon API" :
<div>
<ul>

<img src={pokemonImg} alt={pokemonImg}/>
<p>{chosenPoke}</p>
<ul>
   <label>Type: </label>
   {pokemonType.map(({ type}) => <li key={type.name.toString()}>{type.name}</li>)}
</ul>
    <label>Abilities: </label>
{pokemonAbil.map(({ ability }) => <li key={ability.name.toString()}>{ability.name}</li>)}
</ul>

<ul>
   <label>Base Stats: </label>
   {pokemonStat.map(({ stat, base_stat }) => <li key={stat.name.toString()}>{stat.name} : {base_stat}</li>)}
</ul>
 
</div>
}
</div>
         )
}

export default PokemonDetails;