import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const token = Cookies.get("jwt_token")

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <div className='app-home'>
        <div className='services-container'>
          <div>
            <h2>Reliable Web Hosting Platform for Your Website</h2>
            <p>Fully Managed High Performance Web Hosting With Free Domain</p>
          </div>
          <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1699777094/Vector_2_hkyco9.png" alt="vector" />
        </div>
        <div className='image-container'>
          <img src='https://res.cloudinary.com/dky69roxl/image/upload/v1699777088/Banner_1_ipwkc6.png'
            alt="tech"
            className='image
            '/>
        </div>
      </div>
    </>
    
  )
}

export default Home