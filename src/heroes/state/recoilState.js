import { atom, selector, atomFamily } from 'recoil'
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

export const currentHeroIDState = atom({
  key: 'currentHeroIDState',
  default: null
})
export const currentHeroSkillPointState = atomFamily({
  key: 'currentHeroSkillPointState',
  default: async heroID => {
    const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/heroes/${heroID}/profile`)
    if (response.error) {
      throw response.error
    }
    return response.data
  }
})
