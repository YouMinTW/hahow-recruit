import { atom, atomFamily, selectorFamily } from 'recoil'

export const heroListState = atom({
  key: 'heroListState',
  default: [
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
})

export const currentHeroSkillPointState = atomFamily({
  key: 'currentHeroSkillPointState',
  default: { agi: 9, int: 7, luk: 7, str: 2 }
})
export const currentHeroUpdatedSkillPointState = atomFamily({
  key: 'currentHeroUpdatedSkillPointState',
  default: { agi: 9, int: 7, luk: 7, str: 2 }
})
export const currentHeroState = selectorFamily({
  key: 'currentHeroState',
  get: heroID => ({ get }) => {
    const heroInfo = get(heroListState).find(({ id }) => id === heroID)
    const heroSkillPointFromServer = get(currentHeroSkillPointState(heroID))
    const total =
      Object.values(heroSkillPointFromServer)
        .filter(x => typeof x === 'number')
        .reduce((a, b) => a + b, 0) || 0
    const heroSkillPointFromBrowser = get(currentHeroUpdatedSkillPointState(heroID))
    const remain = total - Object.values(heroSkillPointFromBrowser).reduce((a, b) => a + b, 0) || 0
    return { ...heroInfo, server: heroSkillPointFromServer, browser: heroSkillPointFromBrowser, total, remain }
  }
})
