import React from 'react'
// import {Link} from 'react-router-dom'
import Menu from "./Menu.js"


export default function Home() {
  
      // let nf = new Intl.NumberFormat('en-US');
  return (
 
  <div className="" >
{/* header starts */}
<div>
<Menu />
</div>


{/* begining of header submenu start*/}
<div className="bg-white p-3 header-secondary header-submenu">
					<div className="container ">
						<div className="row">
							<div className="col">
								<div className="d-flex">
										<a className="btn btn-danger" href="#ffsff">Current Balance   $0.00</a> 
									
								</div>
							</div>
							<div className="col col-auto">
								<a className="btn btn-primary mt-4 mt-sm-0" href="add-fund-2.php" style={{marginRight:"5px", borderRadius:"5px"}}><i className="fa fa-usd"></i> Add - Fund</a>
								<a className="btn btn-success mt-4 mt-sm-0" href="submit-ticket.php"  style={{ borderRadius:"5px"}}><i className="fe fe-plus mr-1 mt-1"></i>Submit Ticket</a>
							</div>
						</div>
					</div>
				</div>
{/* begining of header submenu end */}
		{/* content starts here		 */}
		<div className="col-sm-12" style={{background:"#293544", paddingBottom:"100px"}}>
		<div className="page-title-box">
<h4 className="page-title">&nbsp;&nbsp; Dashboard</h4>
</div>


<div className="row">

<div className="col-lg-3">
<div className="card card-eco">
<div className="card-body blink_me bg-success">
<h4 className="title-text mt-0 ">Your Orders</h4>
<div className="d-flex justify-content-between">
<h3 className="font-weight-bold" id="your_order">0</h3>
<i className="dripicons-cart card-eco-icon text-success  align-self-center"></i>
</div>
<p className="mb-0 text-muted text-truncate">
<span className="text-success">
<i className="mdi mdi-trending-up"></i>
<span id="your_order_today">0</span>
</span> Your Order Today
</p>
</div>
</div>
</div>





<div className="col-lg-3">
<div className="card card-eco">
<div className="card-body blink_me bg-danger">
<h4 className="title-text mt-0">Bank Logs</h4>
<div className="d-flex justify-content-between">
<h3 className="font-weight-bold" id="bank_logs">165</h3>
<i className="dripicons-briefcase card-eco-icon text-pink  align-self-center"></i>
</div>
<p className="mb-0 text-muted text-truncate">
<span className="text-success">
<i className="mdi mdi-trending-up"></i>
<span id="bank_logs_today">43</span>
</span> Bank Log Added Today
</p>
</div>
</div>
</div>




<div className="col-lg-3">
<div className="card card-eco">
<div className="card-body blink_me" style={{backgroundColor:"indigo"}}>
<h4 className="title-text mt-0">Card </h4>
<div className="d-flex justify-content-between">
<h3 className="font-weight-bold" id="card_logs">95</h3>
<i className="dripicons-card card-eco-icon text-warning  align-self-center"></i>
</div>
<p className="mb-0 text-muted text-truncate">
<span className="text-success">
<i className="mdi mdi-trending-up"></i>
<span id="card_logs_today">351</span>
</span> Card Added Today
</p>
</div>
</div>
</div>

<div className="col-lg-3">
<div className="card card-eco">
<div className="card-body" id="sound">
<center>
<a href="https://t.me/hubstore_Admin"  target="_blank" rel="noreferrer" className="telegramim_button telegramim_shadow telegramim_pulse" style={{fontSize:"29px",width:"278px",background: "#10932c",boxShadow:"1px 1px 5px yellow",color:"#FFFFFF",borderRadius:"42px"}} title="">
<i className="ftelegramim ftelegramim-telegram-logo"></i>PASTE YOUR EMAIL HERE TO GET $25 WELCOMING BONUS
<small>

</small>
</a>
</center>
</div>
</div>
</div>





</div>
<div className="row">
<div className="col-sm-6">
<div className="card">
<div className="card-body">
<h4 className="header-title mt-0">&nbsp;&nbsp; In Stock</h4>
<div className="accordion" id="accordionExample">
<div className="card border mb-1 shadow-none">
<div className="card-header custom-accordion" id="headingOne">
<a href="home.php" className="text-dark d-flex justify-content-between" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<span className="align-self-center">
<h5>
Card Stock
</h5>
</span>
<img src="./home_files/card-1673581_1280.png" alt="" height="30"/>
</a>
</div>
<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
<div className="card-body">
<div className="row">
<div className="col-md-12"><p></p>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/card-1.png" alt="" height="20"/>
<span className="badge badge-boxed badge-soft-success"> Visa</span>
</label>
<span id="instock_visa" className="badge badge-pink px-3 float-right">12195</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/card-2.png" alt="" height="20"/>
<span className="badge badge-boxed badge-soft-success"> MasterCard</span>
</label>
<span id="instock_mc" className="badge badge-secondary px-3 float-right">6184</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/card-4.png" alt="" height="20"/>
<span className="badge badge-boxed badge-soft-success"> American Express</span>
</label>
<span id="instock_amex" className="badge badge-success px-3 float-right">61</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/card-3.png" alt="" height="20"/>
<span className="badge badge-boxed badge-soft-success"> Discover</span>
</label>
<span id="instock_disco" className="badge badge-primary px-3 float-right">105</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="card mb-1 border shadow-none">
<div className="card-header" id="headingTwo">
<a href="home.php" className="text-dark d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<span className="align-self-center">
<h5>
Bank Stock
</h5>
</span>
<img src="./home_files/bank-icon-6.jpg" alt="" height="30"/>
</a>
</div>
<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
<div className="card-body">
<div className="col-md-12">
<div className="form-group">
<label for="Card_No">
<img src="./home_files/704a1e534e8dc0138eee3ded449555d5.png" alt="" height="20"/>
<span className="badge badge-boxed badge-soft-success"> Chase</span>
</label>
<span id="instock_chase" className="badge badge-pink px-3 float-right">76</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/wells-fargo-squarelogo-1569533783558.png" alt="" height="20"/>
<span className="badge badge-boxed badge-soft-success"> Wells Fargo</span>
</label>
<span id="instock_wells" className="badge badge-secondary px-3 float-right">184</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/usaa-logo_T5zwQ2Q_widget_logo.png" alt="" height="20"/>
<span className="badge badge-boxed badge-soft-success"> USAA</span>
</label>
<span id="instock_usaa" className="badge badge-success px-3 float-right">0</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/bank-of-america-logo-transparent.png" alt="" height="15"/>
<span className="badge badge-boxed badge-soft-success"></span>
</label>
<span id="instock_boa" className="badge badge-primary px-3 float-right">2</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/lockup.svg" alt="" height="15"/>
<span className="badge badge-boxed badge-soft-success"></span>
</label>
<span id="instock_huntington" className="badge badge-warning px-3 float-right">0</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/card-4.png" alt="" height="20"/>
<font color="yellow">
<span className="badge badge-boxed badge-soft-success">American Express</span>
</font>
</label>
<span id="instock_amexx" className="badge badge-success px-3 float-right">2</span>
</div>
<div className="form-group">
<label for="Card_No">
<img src="./home_files/bank-icon-6.jpg" alt="" height="20"/>
<font color="yellow">
<span className="badge badge-boxed badge-soft-success"> Other Bank </span>
</font>
</label>
<span id="instock_other" className="badge badge-light px-3 float-right">63</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-6">
<div className="card">


<div className="card-body blink_me  	" style={{backgroundColor: "rgb(0, 0, 0)",color:"red"}} >
<h4 className="mt-0 mb-3 header-title">&nbsp;&nbsp; Sales History</h4>
<div id="datatable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
	<div className="row"><div className="col-sm-12 col-md-6"></div>
	<div className="col-sm-12 col-md-6"></div></div><div className="row">
		<div className="col-sm-12">
			<div i	d="datatable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
				<div className="row"><div className="col-sm-12 col-md-6"></div>
				<div className="col-sm-12 col-md-6"></div>
			</div><div className="row"><div className="col-sm-12">
				<table className="table table-bordered dt-responsive nowrap dataTable no-footer dtr-inline collapsed" id="datatable" role="grid">
<thead>
<tr role="row"><th className="sorting_desc" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="DATE: activate to sort column ascending" aria-sort="descending">
  Item-Id
</th>
<th className="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="BASE 1: activate to sort column ascending">
	Date of Purchase
</th>
<th className="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="BASE 2: activate to sort column ascending">
Item Name
</th>
<th className="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="BASE 3: activate to sort column ascending">
	Item Info</th>
	
	
				
				</tr>
</thead>
<tbody>
<tr role="row" className="odd">
<td tabindex="0" className="sorting_1">1</td>
<td><center><span className="badge badge-boxed badge-soft-success px-3 "><strong><font color="white"  className="current_date"></font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white" >CHASE BANK LOGINS</font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">Online Access</font></strong></span></center></td>

</tr><tr role="row" className="even">
<td tabindex="0" className="sorting_1 ">2</td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white" className="current_date"></font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">CHIME </font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">Online Access</font></strong></span></center></td>
<td style={{display: "none"}}><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">848</font></strong></span></center></td>
<td style={{display: "none"}}><center><span className=""><b></b><center><b><a href="home.php" data-toggle="modal" data-target="#activityModalInfo" data-date="2022-05-17"><button type="submit" className="button007">1025</button></a></b></center></span></center></td>
</tr><tr role="row" className="odd">
<td tabindex="0" className="sorting_1 ">3</td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white" className="current_date">2670</font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">HUNTINGTON BANK LOGINS</font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">Online Access</font></strong></span></center></td>

<td style={{display:" none"}}><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">98</font></strong></span></center></td>
<td style={{display: "none"}}><center><span className=""><b></b><center><b><a href="home.php" data-toggle="modal" data-target="#activityModalInfo" data-date="2022-05-16"><button type="submit" className="button007">54</button></a></b></center></span></center></td>
</tr><tr role="row" className="even">
<td tabindex="0" className="sorting_1 ">4</td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white" className="current_date">0</font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">WOODFOREST BAMK LOGINS</font></strong></span></center></td>

<td ><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">Online Access</font></strong></span></center></td>
<td style={{display: "none"}}><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">120</font></strong></span></center></td>
<td style={{display: "none"}}><center><span className=""><b></b><center><b><a href="home.php" data-toggle="modal" data-target="#activityModalInfo" data-date="2022-05-15"><button type="submit" className="button007">201</button></a></b></center></span></center></td>
</tr><tr role="row" className="odd">

</tr><tr role="row" className="odd">
<td tabindex="0" className="sorting_1 ">5</td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white" className="current_date">210</font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">UK BANK LOGINS</font></strong></span></center></td>
<td><center><span className="badge badge-boxed badge-soft-success px-3"><strong><font color="white">Online Access</font></strong></span></center></td>


</tr></tbody>
</table></div></div><div className="row"><div className="col-sm-12 col-md-5"></div><div className="col-sm-12 col-md-7"></div></div></div></div></div><div className="row"><div className="col-sm-12 col-md-5"></div><div className="col-sm-12 col-md-7"></div></div></div>
</div>




</div>



</div>


</div>

</div>
		{/* content ends here		 */}


 
</div>
  )
}
