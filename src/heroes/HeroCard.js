import styled from 'styled-components'
import FlexContainer from '../layouts/FlexContainer'

const CardContainer = styled.div`
  margin: 0.5rem;
  color: black;
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 0.8rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
  top: 0px;
  left: 0px;
  transition: all 150ms ease-in-out;
  &:hover {
    top: -3px;
    left: -3px;
    box-shadow: 3px 3px 15px 0px rgba(82, 82, 82, 0.85);
    box-shadow: 0 30px 40px -14px rgba(0, 0, 0, 0.75);
  }
  &:active {
    top: 2px;
    left: 2px;
    background-color: rgb(0, 190, 164);
    color: white;
    box-shadow: inset 0 0 10px rgba(82, 82, 82, 0.85);
  }
`
const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
`

const HeroCard = ({ name, image }) => {
  return (
    <FlexContainer flexDirection='column'>
      <CardContainer>
        <img src={image} alt={name} />
        <CardTitle>{name}</CardTitle>
      </CardContainer>
    </FlexContainer>
  )
}

export default HeroCard
