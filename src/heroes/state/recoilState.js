import { selector, atomFamily, selectorFamily } from 'recoil'
import axios from 'axios'

export const heroListState = selector({
  key: 'heroListState',
  get: async ({ get }) => {
    const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/heroes`)
    if (response.error) {
      throw response.error
    }
    return response.data
  }
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
