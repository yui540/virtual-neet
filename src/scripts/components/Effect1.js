import React from 'react'

export default ({ changeAnimation, num }) => (
  <div className="effect1" data-animation-num={num}>
    <div className="char">
      <div>
        <span onAnimationEnd={e => {
          if (e.animationName === 'eff-1__hidden') { changeAnimation() }
        }}></span>
        <span></span><span></span><span></span>
      </div>
      <div><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
    </div>
    <div className="char">
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
    </div>
  </div>
)
