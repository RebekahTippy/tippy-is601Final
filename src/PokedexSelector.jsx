import React, { useState, useEffect} from 'react';
const Pokedex = require("pokeapi-js-wrapper");

function PokedexSelector(props){
    const { setChosenDex } = props;

//pokedex options
const [pokedexes, setPokedexes] = useState([]);
//error boolean
const [hasError, setError] = useState(false);

  //fetches api data on first render and stores it in pokedexes
  useEffect(function() {
    const P = new Pokedex.Pokedex();
      async function fetchData() {
          await P.resource("api/v2/pokedex").then( response => setPokedexes(response.results))
              .catch(err => setError(err))
      }
      fetchData();
  }, []);

if (!hasError){
  return (
    <ul >
        {pokedexes.map(({ name }) => <li key={name.toString()} ><p>{name}</p><button  onClick={() => setChosenDex(name)}>View</button></li>)}
</ul> 
  )
} else {
  return (
    <p>"An error has occured with the pokemon API"</p>
  )
}
    
    
  
}

export default PokedexSelector;

