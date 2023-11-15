import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies  from 'js-cookie'
import './index.css'

const Header = () => {
  const token = Cookies.get("jwt_token")
  const navigate = useNavigate()

  const handdleLogOut = () => {
    Cookies.remove("jwt_token")
    navigate("/login")
  }
  
  return (
      <div className='header'>
      <span className='website-name'>Techhub</span>
      <div className='nav-container'>
        <ul className='nav-items-container'>
          <li><Link to="/" style={{textDecoration:"none", color:"#fff"}}>Home</Link></li>
          <li><Link to="/domain" style={{ textDecoration: "none", color: "#fff" }}>Domain</Link></li>
          <li><Link to="/web-hosting" style={{ textDecoration: "none", color: "#fff" }}>Web Hosting</Link></li>
          <li><Link to="/server" style={{ textDecoration: "none", color: "#fff" }}>Servers</Link></li>
      </ul>
      <div className='logout-button-container'>
          {token  ?
            <button type="button" className='header-button' onClick={handdleLogOut}>
             Logout
          </button>
            : <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
                <button type="button" className='header-button'>
                  Login
                </button>
            </Link>
          }
          <Link to="/sign-up" style={{ textDecoration: "none", color: "#fff" }}>
              <button type="button" className='header-button'>
                  Sign Up
              </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header