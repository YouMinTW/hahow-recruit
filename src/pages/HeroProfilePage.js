import { useState } from 'react'
import { useParams } from 'react-router-dom'
import SkillPointCounter from '../heroes/SkillPointCounter'
import FlexContainer from '../layouts/FlexContainer'

const HeroProfilePage = () => {
  let { heroID } = useParams()

  return <Form />
}
const Form = () => {
  const response = { agi: 9, int: 7, luk: 7, str: 2 }
  const totalPoint = Object.values(response).reduce((a, b) => a + b, 0)
  const [skillPoints, setSkillPoints] = useState(response)
  const [total, setTotal] = useState(totalPoint)
  const remain = total - Object.values(skillPoints).reduce((a, b) => a + b, 0)
  return (
    <div>
      <FlexContainer flexDirection='column'>
        {Object.entries(skillPoints).map(([property, value]) => (
          <SkillPointCounter
            key={property}
            name={property}
            value={value}
            setSkillPoints={setSkillPoints}
            remain={remain}
          />
        ))}
      </FlexContainer>
      <span>Total:{total}</span>
      <span>Remain:{remain}</span>
      <button>Submit</button>
    </div>
  )
}
export default HeroProfilePage
