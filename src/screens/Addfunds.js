import React from 'react'
import Menu from "./Menu.js"

export default function Addfunds() {
  return (
    <div>
        <Menu /> 
        <div className="container content-area" style={{background:"#293544"}}>
        <div className="contiainer-wrapper" style={{width:"90%",margin:"0 auto"}}>
                   
                   
                   <form style={{margin: "0 auto"}}>
                       <div className="container-one">
                           <div className="container-div">
                               
                                         <p>Bitcoin Automatic Payment</p>
                                         <p><i className="fa fa-check" aria-hidden="true"></i> Deposit</p>
                                         <p><i className="fa fa-undo" aria-hidden="true"></i> Reset</p>
                       
                       
                                         <div>
                                           
                       
                           </div>
                        <div>
                       
                        </div>
                       </div>
                     
                           <div>
                               <img width="200px" src="./assets/images/photos/btc.png" alt=""/>
                            <br/><br/>
                            <div className="bg bg-success" style={{padding:"5px",marginBottom:"10px"}}>ENTER AMOUNT OF USD YOU WANT TO DEPOSIT ✅</div>
                                    <input type="text" className="value1" required style={{display: "inline-block"}}/> <label for="price" style={{display: "inline-block",border: "2px solid  white",padding: "0.1rem"}}>USD</label>
                             <br/>
                                    <button className="btn btn-primary btn-hero">Deposit</button>
                           </div>
                       
                                   </div>
                   </form>





           
                   


                       <div>

                       </div>

               </div>  
      </div>
    </div>
  )
}
