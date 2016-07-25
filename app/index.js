
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'
import Hello from './components/Hello'
import Vote from './components/Vote'
import Stat from './components/Stat'

 
injectTapEventPlugin()


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Hello} />
      <Route path="/vote" component={Vote} />
      <Route path="/stat" component={Stat} />
    </Route>
  </Router>
), document.getElementById('app'))
