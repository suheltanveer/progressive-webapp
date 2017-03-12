import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// css
import 'normalize.css'
import './base.css'
// import styles from './App.css'

// components
import Header from './components/Header/Header'
import About from './components/About/About'
import Post from './components/Post/Post'

const App = () => (
  <Router>
    <div>
      <Header />
      <div>
        <Route exact path="/" component={About}/>
        <Route path="/about" component={About}/>
        <Route path="/posts" component={Post}/>
      </div>
    </div>
  </Router>
)

export default App
