import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import FlexContainer from '../layouts/FlexContainer'
import HeroCard from '../heroes/HeroCard'
import { heroListState } from '../heroes/state/recoilState'

const HeroListPage = () => {
  const heroes = useRecoilValue(heroListState)
  return (
    <FlexContainer justifyContent='space-around'>
      {heroes.map(({ id, name, image }) => (
        <Link key={id} to={`/heroes/${id}`}>
          <HeroCard name={name} image={image} />
        </Link>
      ))}
    </FlexContainer>
  )
}

export default HeroListPage
