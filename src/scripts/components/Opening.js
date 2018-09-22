import React from 'react'
import virtualNeet from '../../images/opening/sub.svg'
import logo1 from '../../images/opening/title/1.svg'
import logo2 from '../../images/opening/title/2.svg'
import logo3 from '../../images/opening/title/3.svg'
import logo4 from '../../images/opening/title/4.svg'
import logo5 from '../../images/opening/title/5.svg'
import logo6 from '../../images/opening/title/6.svg'
import logo7 from '../../images/opening/title/7.svg'
import logo8 from '../../images/opening/title/8.svg'

export default ({ changeChapter }) => (
  <div className="opening">
    <div className="opening__effect"></div>
    <div className="opening__bg opening__bg_type_1">
      <div></div><div></div><div></div><div></div>
    </div>
    <div className="opening__bg opening__bg_type_2">
      <div></div><div></div><div></div><div></div>
    </div>
    <div className="opening__logo">
      <div className="title">
        <img src={logo1} alt="バ" />
        <img src={logo2} alt="ー" />
        <img src={logo3} alt="チ" />
        <img src={logo4} alt="ャ" />
        <img src={logo5} alt="ル" />
        <img src={logo6} alt="ニ" />
        <img src={logo7} alt="ー" />
        <img src={logo8} alt="ト" />
      </div>
      <div className="sub">
        <img src={virtualNeet} alt="Virtual Neet" />
      </div>
    </div>
    <div className="opening__bg opening__bg_type_3">
      <div></div><div></div><div></div>
      <div onAnimationEnd={changeChapter}></div>
    </div>
  </div>
)
