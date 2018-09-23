import React from 'react'

export default ({ changeAnimation, num }) => (
  <div className="effect2" data-animation-num={num}>
    <div className="char">
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
    </div>
    <div className="char">
      <div>
        <span></span><span></span><span></span>
        <span onAnimationEnd={e => {
          if (e.animationName === 'eff-2__hidden-2') { changeAnimation() }
        }}></span>
      </div>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
    </div>
  </div>
)
