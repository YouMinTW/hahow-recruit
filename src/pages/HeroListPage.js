import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import FlexContainer from '../layouts/FlexContainer'
import HeroCard from '../heroes/HeroCard'
import { heroListState, currentHeroIDState } from '../heroes/state/recoilState'

const HeroListPage = () => {
  const heroes = useRecoilValue(heroListState)
  const currentHeroID = useRecoilValue(currentHeroIDState)
  return (
    <FlexContainer justifyContent='space-around'>
      {heroes.map(({ id, name, image }) => (
        <Link key={id} to={`/heroes/${id}`}>
          <HeroCard name={name} image={image} selected={currentHeroID === id} />
        </Link>
      ))}
    </FlexContainer>
  )
}

export default HeroListPage
