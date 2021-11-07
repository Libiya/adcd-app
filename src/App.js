import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import CommentsPage from './pages/CommentPages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/comments" component={CommentsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App

