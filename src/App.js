import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import NewPost from './components/NewPost'
import SearchPost from './components/SearchPost'
import './style.css'

function App() {
  return(
    <Router>
      <div>
      <h1 style= {{textAlign: 'center', marginTop: '15px', fontFamily: 'cursive', fontSize: '45px'}}>Blog Posts</h1>
      <div className = "link-container">
          <Link to = "/addposts" className = "add-post">NEW POST</Link> 
          <Link to = "/postlists" className = "lists-post">PUBLISHED</Link>
      </div>

      <Route path = "/postlists" component = {SearchPost} exact = {true} /> 
      <Route path = "/addposts" component = {NewPost} />
      </div>
    </Router>
  )
}

export default App