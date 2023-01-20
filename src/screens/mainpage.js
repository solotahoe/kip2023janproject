import React from 'react'
// import {Link} from 'react-router-dom'


export default function Mainpage() {
  
      // let nf = new Intl.NumberFormat('en-US');
  return (
 
  <div className="login-form">
  <div className="login-info"> </div>
  <p style={{color:"white"}}></p>
  <h2>cardershub.cc</h2>
  <div className="form-info">
      <form  action="loginprocess.php" method="post" name="loginform">
          <input type="email" name="user_name" id="email" className="text" placeholder="Email Address"/>


          <input type="password" name="password" id="pass" placeholder="**********"/>
          <input type="submit" name="login" value="Login"/>
          <p><a href="/signup">Account Registration?</a></p>
      </form>
  </div>
</div>
  )
}
