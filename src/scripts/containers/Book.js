import { connect } from 'react-redux'
import Book from '../components/Book'
import { changeChapter } from '../actions/opening'
import { closeMenu } from '../actions/menu'
import { changeAnimation } from '../actions/animation'

const mapPropsToState = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('top'))
  },
  closeMenu() {
    dispatch(closeMenu())
  },
  changeAnimation() {
    dispatch(changeAnimation('eff-0'))
  }
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Book)
