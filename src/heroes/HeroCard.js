import styled, { keyframes } from 'styled-components'
import FlexContainer from '../layouts/FlexContainer'
const rotate = selected => keyframes`
 from {
   transform: rotateY(0deg);
 }
 to {
   transform: rotateY(${selected ? 360 : 0}deg);
 }
`
const RotateContainer = styled.div`
  animation-name: ${props => rotate(props.selected)};
  ${props => (props.selected ? 'rgb(46, 225, 179)' : 'white')};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5s;
`
const CardContainer = styled.div`
  margin: 0.5rem;
  color: black;
  background-color: ${props => (props.selected ? 'rgb(46, 225, 179)' : 'white')};
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
    top: 4px;
    left: 4px;
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

const HeroCard = ({ name, image, selected }) => {
  return (
    <RotateContainer selected={selected}>
      <FlexContainer flexDirection='column'>
        <CardContainer selected={selected}>
          <img src={image} alt={name} />
          <CardTitle>{name}</CardTitle>
        </CardContainer>
      </FlexContainer>
    </RotateContainer>
  )
}

export default HeroCard
