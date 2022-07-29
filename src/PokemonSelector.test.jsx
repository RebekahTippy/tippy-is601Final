import { render, screen,  } from '@testing-library/react';

import PokemonSelector from './PokemonSelector';

import {Pokedex} from "pokeapi-js-wrapper";

jest.mock('pokeapi-js-wrapper');

beforeEach(() => {
    
  Pokedex.mockReturnValue({
    getPokedexByName: jest.fn().mockResolvedValue({
        pokemon_entries: [ { pokemon_species:  { name: 'bulbasaur' } }]
    })
})  

})

test('PokemonSelector renders list of pokemon from PokeAPI', async () => {
  
  render(<PokemonSelector />);

let targetPokemon = 'bulbasaur'

 const renderedPokemon = await screen.findByText('bulbasaur')
  
    expect(renderedPokemon.textContent).toBe(targetPokemon)
  
});

afterEach(() => {
  jest.clearAllMocks();
})