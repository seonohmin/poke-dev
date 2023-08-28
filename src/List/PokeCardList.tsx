import styled from "@emotion/styled"
import PokeCard from "./PokeCard";
import { useEffect } from "react";
import { PokemonListReponseType, fetchPokemons } from "../Service/pokemonService";
import { useState } from "react";

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListReponseType>({
    count: 0,
    next: '',
    results: []
  })

  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    })()
  }, [])

  return (
    <List>
      {
        pokemons.results.map((pokemon, index) => {
          return (
            <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
          )
        })
      }
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
  gap: 2rem;
`

export default PokeCardList;