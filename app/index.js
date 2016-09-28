/*
 * Designed, built, and released under MIT license by @myanbin. Learn more at
 * https://github.com/myanbin
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'
import Hello from './components/Hello'
import Vote from './components/Vote'
import Wait from './components/Wait'
import Stat from './components/Stat'

 
injectTapEventPlugin()


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Hello} />
      <Route path="/vote" component={Vote} />
      <Route path="/wait" component={Wait} />
      <Route path="/stat" component={Stat} />
    </Route>
  </Router>
), document.getElementById('app'))
