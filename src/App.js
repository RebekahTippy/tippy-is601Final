import React, { useState, useEffect} from 'react';
import PokedexSelector from './PokedexSelector';
import PokemonSelector from './PokemonSelector';
import PokemonDetails from './PokemonDetails';

function App() {

//what pokedex did user select?
const [chosenDex, setChosenDex] = useState('');
  
  //what pokemon did the user select?
const [chosenPoke, setChosenPoke ] = useState('');
function homeButton() {
  setChosenDex('')
  setChosenPoke('')
}

function clearPokedex(){
  setChosenDex('')
}

function clearPokemon(){
  setChosenPoke('')
}

  if (chosenDex == '' ) {

  return (

    <div> 
     
      <button onClick={homeButton}>Home</button>
      <h1>Pokedex List:</h1>
      <PokedexSelector setChosenDex={setChosenDex}/>
    </div>
  );
  } else if (chosenDex != '' && chosenPoke == ''){

    return (
      <div>
        
<button onClick={homeButton}>Home</button>
<PokemonSelector clearPokedex={clearPokedex} setChosenPoke={setChosenPoke} chosenDex={chosenDex}/>

      </div>
    )
  } else if ( chosenDex != '' && chosenPoke != '') {

    return (
      <div>
<button onClick={homeButton}>Home</button>
<PokemonDetails clearPokemon={clearPokemon} chosenPoke={chosenPoke}/>
</div>

    )
  }

}

export default App;

//is it ok to pass state function as callback instead of a function that uses that function?
//does the error message have to be the error?