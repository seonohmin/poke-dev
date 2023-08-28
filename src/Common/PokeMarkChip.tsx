import styled from "@emotion/styled";

const PokeMarkChip = () => {
  return (
    <Chip>
      <Text>Pokemon</Text>
    </Chip>
  )
};

const Chip = styled.div`
  display: flex;  
  align-items: center;

  border: .1rem solid #f1f1f1;
  border-radius: 1.6rem;

  
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #f1f1f1;

  margin-left: auto;
  margin-right: 0.8rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  

`

const Text = styled.label`
  font-size: 1.4rem;
  padding: .2rem .8rem;
`


export default PokeMarkChip;