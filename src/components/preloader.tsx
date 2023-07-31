"use client"

const PokemonListPreloader = (data: any) => {

  if (data) localStorage.setItem('pokemons', JSON.stringify(data))
  return null

}

const PokemonPreloader = (data: any) => {

  if (data) localStorage.setItem('pokemon', JSON.stringify(data))
  return null

}

export { PokemonPreloader, PokemonListPreloader }
