import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
`
export default FlexContainer
