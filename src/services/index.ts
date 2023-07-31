import { Pokemon } from "@/@types"

export const getAllPokemons = async (): Promise<Pokemon[]> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5`)
  const data = await res.json()

  return data?.results
}

export const getPokemon = async ({ pokemon }: { pokemon: string }): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await res.json()

  return data
}

export const isOffline = (): boolean => {
  "use client"

  return !navigator.onLine

}
