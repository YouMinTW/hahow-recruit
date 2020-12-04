import styled from 'styled-components'

const PageLayout = styled.section`
  margin: 0 auto;
  width: 80%;
  max-width: 1024px;
  min-height: 70vh;
  display: ${props => props.display || 'block'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default PageLayout
