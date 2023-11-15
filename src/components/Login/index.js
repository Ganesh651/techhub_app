import React, { useState } from 'react'
import { useNavigate ,Link, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
// import useFetch from '../useFetch'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("") 

  const navigate = useNavigate()

  

  const renderSuccessView = jwtToken => {                                         
    Cookies.set("jwt_token", jwtToken, { expires: 30 })
    navigate("/",{replace: true})
  }
  
  const renderFailureView = error => {
    setErrorMessage(error)
  }
  
  const loginHanddler =  async e => {
    e.preventDefault()
    const userDetails = {username,password}
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails)
    }
    const url = "https://apis.ccbp.in/login"

    const response = await fetch(url, options)
    const loginDetails = await response.json()


    if (response.ok === true) {
      renderSuccessView(loginDetails.jwt_token)
    } else {
      renderFailureView(loginDetails.error_msg)
    }
  }


  const inputType = showPassword ? "text" : "password"
  const token = Cookies.get("jwt_token")

  if (token !== undefined) {
    return <Navigate to="/"/>
  }

  return (
    <div className='login-conatiner'>
      <form className='login-form' onSubmit={loginHanddler}>
        <div style={{textAlign:"center", marginBottom: "20px"}}>
          <span className='website-logo'>Techhub</span>
        </div>
        <div className='login-input-container'>
          <label htmlFor='username' className='login-label'>Username</label><br />
          <input className='login-input'
            id="username"
            type="text"
            placeholder='Enter Username'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className='login-input-container'>
          <label htmlFor='password' className='login-label'>Password</label><br/>
          <input className='login-input'
            id="password"
            type={inputType}
            placeholder='Enter Password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='checkbox-container'>
          <input id="checkbox" type="checkbox" className='checkbox' onClick={()=>setShowPassword(!showPassword)}  />
          <label htmlFor='checkbox' className='show-password'>Show Password</label>
        </div>
        <div className='login-button-container'>
          <button type="submit" className='login-button'>
            Login
          </button>
          {errorMessage && <span className='error-message'>*{errorMessage}</span>}
        </div>
        <div className='signup-message-container'>
          <span style={{ color: "#fff" }}>Don't have an account   <Link to="/sign-up" style={{ textDecoration: "none", color:"#CF088C", fontWeight:"600"}}>Sign up</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Login
