import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Member from '../containers/Member'
import Book from '../containers/Book'

export default () => (
  <Router>
    <div className="virtual-neet">
      <Route exact path="/" component={Home} />
      <Route exact path="/book" component={Book} />
      <Route exact path="/member" component={Member} />
    </div>
  </Router>
)
