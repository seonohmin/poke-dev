import styled from "@emotion/styled"
import PokeCard from "./PokeCard";
import { useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { fetchPokemons } from "../Store/pokemonsSlice";
import { RootState, useAppDispatch } from "../Store";
import { useSelector } from "react-redux";

const PokeCardList = () => {
  const dispatch = useAppDispatch()
  const { pokemons } = useSelector((state: RootState) => state.pokemons)


  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== '',
    onLoadMore: async () => {
      dispatch(fetchPokemons(pokemons.next));
    },
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch])

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