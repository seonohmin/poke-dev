import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useIntersectionObserver } from 'react-intersection-observer-hook'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { PokeImageSkeleton } from "../Common/PokeImageSkeleton";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store";
import { fetchPokemonsDetail } from "../Store/pokemonDetailSlice";

interface PokeCardProps {
  name: string
}

const PokeCard = (props:PokeCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imageType = useSelector((state: RootState) => state.imageType.type)
  const { pokemonDetails } = useSelector((state: RootState) => state.pokemonDetail)
  const pokemon = pokemonDetails[props.name]
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  }

  useEffect(() => {
    if(!isVisible) {
      return;
    }
    dispatch(fetchPokemonsDetail(props.name))
  }, [dispatch, props.name, isVisible])

  if(!pokemon) {
    return (
      <Item ref={ref} color={'#fff'}>
        <Header>
          <PokeNameChip name={'포켓몬'} color={'#ffca09'} id={0}/>
        </Header>
        <Body>
          <PokeImageSkeleton />
        </Body>
        <Footer>
          <PokeMarkChip />
      </Footer>        
      </Item>
    )
  }

  return (
    <Item onClick={handleClick} color={pokemon.color} ref={ref}>
      <Header>
        <PokeNameChip name={pokemon.koreanName} color={pokemon.color} id={pokemon.id}/>
      </Header>
      <Body>
        <Image src={pokemon.images[imageType]} alt={pokemon.name} /> 
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  )
}

const Item = styled.li<{ color: string }>`
  display: flex;
  flex-direction: column;
  padding: .8rem;
  width: 25rem;
  height: 30rem;
  border: .1rem solid #f1f1f1;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.09);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${props => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`

const Header = styled.section`
  display: flex;
  margin: .8rem 0;
`

const Body = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: .8rem 0;
`

const Image = styled.img`
  width: 18rem;
  height: 18rem;
`

const Footer = styled.section`
  display: flex;
`



export default PokeCard;