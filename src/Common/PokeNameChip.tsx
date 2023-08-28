import styled from "@emotion/styled";

interface PokeNameChipProps {
  name: string,
  id: number,
  color: string
}

const PokeNameChip = (props:PokeNameChipProps) => {
  const renderNumber = (id:number) => {
    const digits = 3;
    const numberString = id.toString();

    if(numberString.length >= digits) {
      return numberString;
    }

    let result = '';

    for(let i = 0; i < digits - numberString.length; i++ ) {
      result +='0';
    }

    return `${result}${numberString}`
  }

  return (
    <Chip>
      <Number color={props.color}>{renderNumber(props.id)}</Number>
      <ChipText>{props.name}</ChipText>
    </Chip>
  )
}

const Chip = styled.div`
  display: flex;  
  align-items: center;

  border: .1rem solid #f1f1f1;
  border-radius: 1.6rem;

  font-size: 1.4rem;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #f1f1f1;
  margin-left: 0.8rem;
`

const Number = styled.div<{ color: string }>`
  display: flex;
  padding: .4rem .6rem;
  background-color: ${props => props.color};
  border-radius: 1.6rem;
  color: #fff;
  opacity: .8;
`

const ChipText = styled.label`
  margin: 0 .8rem 0 .5rem;
`

export default PokeNameChip;