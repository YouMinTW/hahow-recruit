import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { Row, Col, Grid, Button } from 'antd'
import styled from 'styled-components'
import FlexContainer from '../layouts/FlexContainer'
import SkillPointCounter from '../heroes/SkillPointCounter'
import propertyOrderMap from '../propertyOrderMap.json'
import { currentHeroSkillPointState } from '../heroes/state/recoilState'

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
  const originalSkillPoints = useRecoilValue(currentHeroSkillPointState(heroID))
  const [skillPoints, setSkillPoints] = useState({})
  useEffect(() => {
    setSkillPoints(originalSkillPoints)
  }, [heroID])
  const remain =
    Object.values(originalSkillPoints).reduce((a, b) => a + b, 0) -
    Object.values(skillPoints).reduce((a, b) => a + b, 0)
  const screens = useBreakpoint()
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
