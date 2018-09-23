import { connect } from 'react-redux'
import { changeAnimation } from '../actions/animation'
import Effect3 from '../components/Effect3'

const mapStateToProps = state => ({
  num: state.animation.num
})

const mapDispatchToProps = dispatch => ({
  changeAnimation() {
    dispatch(changeAnimation('eff-1'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Effect3)
