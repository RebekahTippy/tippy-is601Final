import { render, screen, within } from '@testing-library/react';

import PokedexSelector from './PokedexSelector';

import {Pokedex} from "pokeapi-js-wrapper";

jest.mock('pokeapi-js-wrapper');

beforeEach(() => {
    
  Pokedex.mockReturnValue({
    resource: jest.fn().mockResolvedValue({
        results: [ { name: 'national' }]
    })
})  

})

test('PokedexSelector renders list of pokedexes from PokeAPI', async () => {
  
  render(<PokedexSelector />);

let mockAPI = 'national'
  
 const renderedPokedexes = await screen.findByText('national')
  
    expect(renderedPokedexes.textContent).toBe(mockAPI)
  
});

afterEach(() => {
  jest.clearAllMocks();
})