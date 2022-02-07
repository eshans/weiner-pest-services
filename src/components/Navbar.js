import React, { useState } from 'react'
import '../App.css'
import Dropdown from './Dropdown';
import ReorderIcon from '@material-ui/icons/Reorder';


export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav className="nav">
      <button className="open" onClick={() => setShowLinks(!showLinks)}>
        <ReorderIcon />
      </button>
      <div className="left">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/">Home</a>
          <a href="/about">Areas We Serve</a>
          <a href="/pests-we-treat">Pests We Treat</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      {/* Right side of navbar */}
      <div className="right">
      </div>
    </nav>
  )
}

