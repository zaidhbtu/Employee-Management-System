import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <header>
           <nav className="navbar navbar-dark bg-dark">
              <a className="navbar-brand" href=""><Link to="/">Employee Management System</Link></a>
           </nav>
       </header>
    </div>
  )
}

export default Header
