import { CHANGE_ANIMATION } from '../constants/animation'

export const changeAnimation = num => ({
  type: CHANGE_ANIMATION,
  payload: {
    num
  }
})
