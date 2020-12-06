import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import FlexContainer from '../layouts/FlexContainer'
import HeroCard from '../heroes/HeroCard'
import { heroListState, currentHeroIDState } from '../heroes/state/recoilState'

const HeroListPage = () => {
  const heroes = useRecoilValue(heroListState)
  const currentHeroID = useRecoilValue(currentHeroIDState)

  //  TODO 流程上，可以跟 UI, PM 討論，使用者的技能點數更新後，若未儲存直接切換分頁，原本英雄的技能更新會遺失，是否該保留未儲存的修改，或是切換英雄前做一些視覺提醒
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
