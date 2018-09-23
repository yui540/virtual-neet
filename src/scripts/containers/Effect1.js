import { connect } from 'react-redux'
import { changeAnimation } from '../actions/animation'
import Effect1 from '../components/Effect1'

const mapStateToProps = state => ({
  num: state.animation.num
})

const mapDispatchToProps = dispatch => ({
  changeAnimation() {
    dispatch(changeAnimation('eff-2'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Effect1)
