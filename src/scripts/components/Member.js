import React from 'react'
import { Link } from 'react-router-dom'
import memberTitle from '../../images/member/title.svg'
import members from '../config/member.json'

export default ({
  changeAnimation,
  changeChapter,
  closeMenu
}) => {
  changeAnimation()
  changeChapter()
  closeMenu()

  return (
    <article className="member">
      <div className="member__bg"></div>
      <div className="member__body">
        <img className="title" src={memberTitle} alt="メンバー紹介" />
        <div className="content">
          {
            members.map((member, key) => {
              return (
                <div className="member-li" key={key}>
                  <img className="icon" src={member.icon} alt={member.name} />
                  <h2 className="name">
                    <span>{member.name}</span>
                  </h2>
                  <p className="message">{member.message}</p>
                  <div className="link">
                    <a
                      href={member.link.twitter}
                      data-state={!!member.link.twitter}
                      rel="noopener noreferrer"
                      target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href={member.link.github}
                      data-state={!!member.link.github}
                      rel="noopener noreferrer"
                      target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={member.link.web}
                      data-state={!!member.link.web}
                      rel="noopener noreferrer"
                      target="_blank">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Link className="member__close-btn" to="/"></Link>
    </article>
  )
}
