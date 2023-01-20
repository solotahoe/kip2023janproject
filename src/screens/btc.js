import React from 'react'
import Menu from "./Menu.js"
export default function Btc() {
  return (
    <div>
      <Menu /> 
      <div className="container text-center" style={{width:"80%",margin0:"auto"}}>
                        <h2>Bitcoin Payment</h2>
                        <p>

                            Please Scan The QR code or copy the adress to make sure you are paying to correct adress.  
                        </p>

                    <div>
                        <img style={{width: "200px"}} src="./assets/images/photos/btc.jpg" alt=""/>
                       <br /><br />


                <input type="text" value="bc1qyhsj6mxzhn2vy096ythpqsfechndkrqh6wxump" id="myInput"/>

              
                <button className="btn btn-success">Copy text</button>
                       <br /><br />            
              <p>NOTE: Upon Completion of payment, Your current balance status will be updated on you account balance.
if you don't have bitcoin CLICK HERE! or CLICK HERE! to buy You can as well use cashapp or bitcoin atm machine.
If you need help contact us on telegram via Telegram</p>
            </div>

</div>

    </div>
  )
}
