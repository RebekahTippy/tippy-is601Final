import { render, screen,  } from '@testing-library/react';
import PokemonDetails from './PokemonDetails';
import {Pokedex} from "pokeapi-js-wrapper";

jest.mock('pokeapi-js-wrapper');

beforeEach(() => {
    
  Pokedex.mockReturnValue({
    getPokemonByName: jest.fn().mockResolvedValue({
        abilities: [ { ability:  { name: 'overgrow' } }],
        stats: [ { base_stat: 45, stat:  { name: 'hp' } }],
        types: [ { type: { name: 'grass' } }],
        sprites: { front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"}
    })
})  

})

test('PokemonSelector renders list of pokemon from PokeAPI', async () => {
  
  render(<PokemonDetails />);

let targetAbil = 'overgrow'
let targetStatVal = 'hp : 45'
let targetType = 'grass'
let targetImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'

const rendAbil = await screen.findByText('overgrow')
const rendStatVal = await screen.findByText(/45/i, /hp/i)

 const rendType = await screen.findByText('grass')
 const rendImg = await screen.findByAltText('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png')
  
    expect(rendAbil.textContent).toBe(targetAbil)
    expect(rendStatVal.textContent).toBe(targetStatVal)
    expect(rendType.textContent).toBe(targetType)
    expect(rendImg.getAttribute("src")).toBe(targetImg)
  
});

afterEach(() => {
  jest.clearAllMocks();
})