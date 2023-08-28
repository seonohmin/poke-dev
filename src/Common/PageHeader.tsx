import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { POKEMON_IMAGE_TYPE } from "../Constants"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../Store"
import { PokemonImageKeyType, changeImageType } from "../Store/imageTypeSlice"
import { ChangeEvent } from "react"

const PageHeader = () => {
  const type = useSelector((state: RootState) => state.imageType.type)
  const dispatch = useAppDispatch()

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeImageType({
      type: e.target.value as PokemonImageKeyType
    }))
  }

  return (
    <Header>
      <Title>
        <Link to="/">Pokemon</Link>  
      </Title>
      <Select value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Official</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  )
}

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  margin-bottom: 1.6rem;
  border-bottom: .1rem solid #c0c0c0;

`

const Title = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  color: #ffca09;
  text-shadow: -1px 0 #4d84c8, 0 2px #4d84c8, 1px 0 #4d84c8, 0 -1px #4d84c8;
`

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: .8rem 1.2rem;
  border-radius: .8rem;
`

export default PageHeader