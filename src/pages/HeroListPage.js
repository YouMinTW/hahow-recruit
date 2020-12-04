import { Link } from 'react-router-dom'
import FlexContainer from '../layouts/FlexContainer'
import HeroCard from '../heroes/HeroCard'

const heroes = [
  {
    id: '1',
    name: 'Daredevil',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg'
  },
  {
    id: '2',
    name: 'Thor',
    image: 'http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg'
  },
  {
    id: '3',
    name: 'Iron Man',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg'
  },
  {
    id: '4',
    name: 'Hulk',
    image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg'
  }
]

const HeroListPage = () => {
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
