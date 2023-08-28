import styled from "@emotion/styled";
import PokeMarkChip from "../Common/PokeMarkChip";
import { PokemonDetailType, fetchPokemonDetail } from "../Service/pokemonService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokeImageSkeleton } from "../Common/PokeImageSkeleton";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null)

  useEffect(() => {
    if(!name) {
      return;
    }

    (async () => {
      const detail = await fetchPokemonDetail(name);
      setPokemon(detail);
    })()
  }, [name])

  if(!name || !pokemon) {
    return (
      <Container>
        <ImageContainer>
          <PokeImageSkeleton /> 
        </ImageContainer>
        <Divider />
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    )
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.koreanName} /> 
      </ImageContainer>
      <Divider />
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>{pokemon.id}</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>{`${pokemon.koreanName} (${pokemon.name})`}</td>
            </TableRow>
            <TableRow>
              <TableHeader>타입</TableHeader>
              <td>{pokemon.types.toString()}</td>
            </TableRow>
            <TableRow>
              <TableHeader>키</TableHeader>
              <td>{pokemon.height} m</td>
            </TableRow>
            <TableRow>
              <TableHeader>몸무게</TableHeader>
              <td>{pokemon.weight} kg</td>
            </TableRow>           
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            {
              pokemon.baseStats.map(stat => {
                return (
                  <TableRow key={stat.name}>
                    <TableHeader>{stat.name}</TableHeader>
                    <td>{stat.value}</td>
                  </TableRow>
                )
              })
            }
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  )
}

const Container = styled.section`
  margin: 1.6rem 3.2rem;
  border: .1rem solid #f1f1f1;
  border-radius: 1.6rem;
  box-shadow: 0.5px 0.5px 0 0 #f1f1f1;
`
const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: .8rem 0; 
  min-height: 35rem;
`

const Image = styled.img`
  width: 35rem;
  height: auto;
  max-width: 100%;
`

const Divider = styled.hr`
  margin: 3.2rem 1.6rem;
  border-style: none;
  border-top: .1rem dashed #d3d3d3;
`

const Body = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  

  h2 {
    margin-left: 3.5rem;
    font-weight: bold;
    font-size: 2rem;
  }
`

const Table = styled.table`
  padding: 0 2rem;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 1.6rem;

  th, td {
    padding: .6rem 1.2rem;
  }
`

const TableRow = styled.tr`
  border-width: .1rem 0;
  border-style: solid;
  border-color: #f0f0f0;

`

const TableHeader = styled.th`
  width: .1rem;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  font-size: 1.4rem;
  color: #a0a0a0;
`

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 3.2rem 1.6rem;
`

export default PokemonDetail;