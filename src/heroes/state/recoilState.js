import { selector, selectorFamily } from 'recoil'
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

export const currentHeroSkillPointState = selectorFamily({
  key: 'currentHeroSkillPointState',
  get: heroID => async ({ get }) => {
    const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/heroes/${heroID}/profile`)
    if (response.error) {
      throw response.error
    }
    return response.data
  }
})
