import { OPEN_MENU, CLOSE_MENU } from '../constants/menu'

const init = {
  state: 'passive'
}

export default (state = init, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return Object.assign({}, state, {
        state: 'active'
      })
    case CLOSE_MENU:
      return Object.assign({}, state, {
        state: 'passive'
      })
    default:
      return state
  }
}
