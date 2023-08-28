import styled from "@emotion/styled"
import PokeCard from "./PokeCard";
import { useEffect } from "react";
import { PokemonListReponseType, fetchPokemons } from "../Service/pokemonService";
import { useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListReponseType>({
    count: 0,
    next: '',
    results: []
  })

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== '',
    onLoadMore: async () => {
      const morePokemons = await fetchPokemons(pokemons.next);

      setPokemons({
        ...morePokemons,
        results: [...pokemons.results, ...morePokemons.results]
      })
    },
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

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
      {(
        <Loading ref={infiniteRef}>
          Loading 
        </Loading>
      )}
    </List>
  )
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0;
  gap: 2rem;
`

export default PokeCardList;