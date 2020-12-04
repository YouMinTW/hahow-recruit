import { useParams } from 'react-router-dom'
import FlexContainer from '../layouts/FlexContainer'

const HeroProfilePage = () => {
  let { heroID } = useParams()

  return <Form />
}
const Form = () => {
  const response = { agi: 9, int: 7, luk: 7, str: 2 }
  return (
    <div>
      <button>Submit</button>
    </div>
  )
}
export default HeroProfilePage
