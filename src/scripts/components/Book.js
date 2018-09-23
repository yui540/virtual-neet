import React from 'react'
import { Link } from 'react-router-dom'
import bookTitle from '../../images/book/title.svg'

export default ({
  changeAnimation,
  changeChapter,
  closeMenu
}) => {
  changeAnimation()
  changeChapter()
  closeMenu()

  return (
    <article className="book">
      <div className="book__bg"></div>
      <div className="book__body">
        <img className="title" src={bookTitle} alt="頒布物について" />
        <div className="content">
          <div className="imgs">
            <a
              href="./images/book/1.jpg"
              target="_blank">
              <img src="./images/book/1.jpg" alt="1" />
            </a>
            <a
              href="./images/book/2.jpg"
              target="_blank">
              <img src="./images/book/2.jpg" alt="2" />
            </a>
            <a
              href="./images/book/3.jpg"
              target="_blank">
              <img src="./images/book/3.jpg" alt="3" />
            </a>
          </div>
          <p>様々な分野の技術が１冊に詰まった、ごった煮技術書がここに登場！</p>
          <p>Webを始め、CSSアニメーション、ゲーム、3DCC、ミュージック、イラストなど</p>
          <p>様々な分野において技術を磨いている8人で１冊を書き上げた大変ボリューミーな本になっています！</p>
          <p>様々な技術や業界に興味がある人は是非お手にとってご覧ください。</p>
          <a className="btn" href="https://techbookfest.org/event/tbf05/circle/47180004" rel="noopener noreferrer" target="_blank">チェックリストに追加する</a>
          <h3 className="sub-title">タイトルと著作者</h3>
          <div className="editors">
            <div className="editor">
              <p>夜空ノ贈リ物</p>
              <p>著:yui540</p>
            </div>
            <div className="editor">
              <p>キャラクターイラストのいろは</p>
              <p>著:トム</p>
            </div>
            <div className="editor">
              <p>ぐだぐだ Maya Arnold おーだー</p>
              <p>著:喜多隼人</p>
            </div>
            <div className="editor">
              <p>Mayaのリギングのおはなし</p>
              <p>著:吉武 ニキータ</p>
            </div>
            <div className="editor">
              <p>VRサウンドでのバイノーラル録音の研究</p>
              <p>著:Amemiya</p>
            </div>
            <div className="editor">
              <p>映像音響とサウンドデザイン</p>
              <p>著:Kou</p>
            </div>
            <div className="editor">
              <p>脱おまじない！？Unityチュートリアル</p>
              <p>著:菅沼 泰</p>
            </div>
            <div className="editor">
              <p>Rails と PWA で作る 簡単 Web サービス！</p>
              <p>著:おりばー</p>
            </div>
          </div>
          <h3 className="sub-title">対象者</h3>
          <div className="info">
            <p>色々な技術が好きな人</p>
            <p>WEBサービスを作ってみたい方</p>
            <p>PWAをやってみたい方</p>
            <p>CSSアニメーションを使った自己表現をしたい方</p>
            <p>イラストを描けるようになりたい方</p>
            <p>Autodesk Mayaでのリギングに理解を深めたい方</p>
            <p>これからUnityを始めようと思う方</p>
          </div>
        </div>
      </div>
      <Link className="book__close-btn" to="/"></Link>
    </article>
  )
}
