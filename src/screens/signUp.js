import React from 'react'
// import {Link} from 'react-router-dom'


export default function Signup() {
  
     
  return (
 
    <div className="login-form">
    <div className="login-info"> </div>
    <p style={{color:"white"}}></p>
    <h2>cardershub.c</h2>
    <div className="form-info">
        <form name="loginform">
            <input type="email" name="user_name" id="email" className="text" placeholder="Email Address"/>
            <input type="password" name="password" id="pass" placeholder="**********"/>
            <input type="password" name="confirm" id="pass" placeholder="confirm"/>
            <input type="submit" name="login" value="Signup"/>
            <p><a href="/">Login</a></p>
        </form>
    </div>
</div>
  )
}
