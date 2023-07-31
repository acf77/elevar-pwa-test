import Image from "next/image";
import Link from "next/link";

import { Stack } from "@/components/ui/stack";
import { capitalize } from "@/lib/utils";
import { getAllPokemons } from "@/services";
import { PokemonListPreloader } from "@/components/preloader";

export default async function Page() {

  const pokemons = await getAllPokemons();

  return (
    <>
      <PokemonListPreloader {...pokemons} />
      <h1 className="text-xl">PokeChat</h1>
      {(pokemons.map((pokemon) => (
        <Link href={`/conversation/${pokemon.name}`} key={pokemon.name}>
          <Stack direction="row" gap={4} className="border rounded-md p-4 my-2 hover:bg-slate-100 justify-between items-center">
            <Stack direction="row" gap={4} className="items-center">
              <Image
                height={32}
                width={32}
                alt={pokemon.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}
              />
              <p>{capitalize(pokemon.name)}</p>
            </Stack>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </Stack>
        </Link>
      )))}
    </>
  )
}
