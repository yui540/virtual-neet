import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/top/logo.svg'
import book from '../../images/top/book.svg'
import member from '../../images/top/member.svg'
import Effect1 from '../containers/Effect1'
import Effect2 from '../containers/Effect2'
import Effect3 from '../containers/Effect3'

export default ({
  changeAnimation, openMenu, closeMenu, menu
}) => (
  <article className="top">
    <div className="top__bg"></div>
    <div className="top__girls">
      <div></div>
      <div onAnimationEnd={e => {
        if (e.animationName === 'top__jump-girl-2') { changeAnimation() }
      }}></div>
    </div>
    <div className="top__logo">
      <img src={logo} alt="バーチャルニート" />
    </div>
    <div className="top__menu">
      <Link to="/book"><img src={book} alt="配布物について" /></Link>
      <Link to="/member"><img src={member} alt="メンバー紹介" /></Link>
    </div>
    <button type="button" onClick={openMenu} className="top__menu-btn">
      <span></span><span></span><span></span>
    </button>
    <div className="top__text">
      <Effect1 />
      <Effect2 />
      <Effect3 />
    </div>
    <div className="top__menu__sp" data-state={menu}>
      <div className="bg">
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="wrap">
        <Link to="/book"><img src={book} alt="配布物について" /></Link>
        <Link to="/member"><img src={member} alt="メンバー紹介" /></Link>
      </div>
      <button type="button" onClick={closeMenu} className="close-btn"></button>
    </div>
  </article>
)
