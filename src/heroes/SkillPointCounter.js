import { Button, Row, Col, Typography, Divider } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import FlexContainer from '../layouts/FlexContainer'

const { Title } = Typography
const StyledTitle = styled(Title)`
  text-align: center;
  text-transform: uppercase;
`
const StyledSpan = styled.span`
  text-align: center;
  display: inline-block;
  width: 60px;
`

const SkillPointCounter = ({ name, value, remain, increment, decrement }) => {
  return (
    <Row>
      <Col xs={{ span: 24 }} sm={{ span: 8 }}>
        <StyledTitle level={4}>{name}</StyledTitle>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 16 }}>
        <FlexContainer justifyContent='center'>
          <Button onClick={() => increment(value)} icon={<PlusOutlined />} disabled={remain <= 0} />
          <StyledSpan>{value}</StyledSpan>
          <Button onClick={() => decrement(value)} icon={<MinusOutlined />} disabled={value <= 0} />
        </FlexContainer>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 0 }}>
        <Divider />
      </Col>
    </Row>
  )
}

export default SkillPointCounter
