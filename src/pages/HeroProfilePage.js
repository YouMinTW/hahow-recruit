import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Grid, Button } from 'antd'
import styled from 'styled-components'
import FlexContainer from '../layouts/FlexContainer'
import SkillPointCounter from '../heroes/SkillPointCounter'
import propertyOrderMap from '../propertyOrderMap.json'

const { useBreakpoint } = Grid

const StyledSpan = styled.span`
  display: block;
  padding: 20px;
`
const StyledDiv = styled.div`
  padding: 10%;
`

const HeroProfilePage = () => {
  let { heroID } = useParams()
  const screens = useBreakpoint()
  const response = { agi: 9, int: 7, luk: 7, str: 2 }
  const totalPoint = Object.values(response).reduce((a, b) => a + b, 0)
  const [skillPoints, setSkillPoints] = useState(response)
  const [total, setTotal] = useState(totalPoint)
  const remain = total - Object.values(skillPoints).reduce((a, b) => a + b, 0)
  const incrementWith = propertyName => value =>
    setSkillPoints(prevStatus => {
      if (remain > 0) {
        return { ...prevStatus, [propertyName]: value + 1 }
      } else {
        return prevStatus
      }
    })
  const decrementWith = propertyName => value =>
    setSkillPoints(prevStatus => {
      if (value > 0) {
        return { ...prevStatus, [propertyName]: value - 1 }
      } else {
        return prevStatus
      }
    })
  return (
    <StyledDiv>
      <Row justify='space-between' align='middle'>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          {Object.entries(skillPoints)
            .sort(([propertyA], [propertyB]) => {
              return propertyOrderMap[propertyA] - propertyOrderMap[propertyB]
            })
            .map(([property, value]) => (
              <SkillPointCounter
                key={property}
                name={property}
                value={value}
                remain={remain}
                increment={incrementWith(property)}
                decrement={decrementWith(property)}
              />
            ))}
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <FlexContainer flexDirection='column' justifyContent='space-around' alignItems='center'>
            <StyledSpan>剩餘點數:{remain}</StyledSpan>
            <Button disabled={remain > 0} block={screens['xs']}>
              Submit
            </Button>
          </FlexContainer>
        </Col>
      </Row>
    </StyledDiv>
  )
}

export default HeroProfilePage
