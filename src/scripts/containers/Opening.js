import { connect } from 'react-redux'
import Opening from '../components/Opening'
import { changeChapter } from '../actions/opening'

const mapPropsToState = state => ({
  chapter: state.opening.chapter
})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('top'))
  }
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Opening)
