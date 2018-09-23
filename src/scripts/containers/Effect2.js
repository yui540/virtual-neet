import { connect } from 'react-redux'
import { changeAnimation } from '../actions/animation'
import Effect2 from '../components/Effect2'

const mapStateToProps = state => ({
  num: state.animation.num
})

const mapDispatchToProps = dispatch => ({
  changeAnimation() {
    dispatch(changeAnimation('eff-3'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Effect2)
