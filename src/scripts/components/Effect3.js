import React from 'react'

export default ({ changeAnimation, num }) => (
  <div className="effect3" data-animation-num={num}>
    <div
      className="char"
      onAnimationEnd={e => {
        if (e.animationName === 'eff-3__hidden') { changeAnimation() }
      }}>
      <div><span></span><span></span><span></span><span></span></div>
      <div><span></span><span></span><span></span><span></span></div>
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
