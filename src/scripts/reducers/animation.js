import { CHANGE_ANIMATION } from '../constants/animation'

const init = {
  num: 'eff-0'
}

export default (state = init, action) => {
  switch (action.type) {
    case CHANGE_ANIMATION:
      return Object.assign({}, action, {
        num: action.payload.num
      })
    default:
      return state
  }
}
