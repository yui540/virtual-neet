import { connect } from 'react-redux'
import Top from '../components/Top'
import { openMenu, closeMenu } from '../actions/menu'
import { changeAnimation } from '../actions/animation'

const mapStateToProps = state => ({
  menu: state.menu.state
})

const mapDispatchToProps = dispatch => ({
  openMenu() {
    dispatch(openMenu())
  },
  closeMenu() {
    dispatch(closeMenu())
  },
  changeAnimation() {
    dispatch(changeAnimation('eff-1'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
