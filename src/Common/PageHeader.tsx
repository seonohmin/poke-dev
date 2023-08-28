import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const PageHeader = () => {
  return (
    <>
      <Header>
        <Title>
          <Link to="/">Pokemon</Link>  
        </Title>
        <Select>
          <option value='Official'>Official</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </Select>
      </Header>
    </>
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