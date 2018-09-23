import { combineReducers } from 'redux'
import opening from './opening'
import menu from './menu'
import animation from './animation'

export default combineReducers({
  opening,
  menu,
  animation
})
