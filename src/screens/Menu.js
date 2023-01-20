import React from 'react'


export default function Menu() {
  return (
    <div>
        <div className="page">
			<div className="page-main">
				
				<div className="app-header header hor-topheader d-flex">
					<div className="container">
						<div className="d-flex">
						
							<a id="horizontal-navtoggle" className="animated-arrow hor-toggle"><span></span></a>
							

							
							
							<div className="d-flex order-lg-2 ml-auto header-rightmenu">
								<div className="dropdown">
									<a  className="nav-link icon full-screen-link" id="fullscreen-button">
										<i className="fe fe-maximize-2"></i>
									</a>
								</div>
								
								<div className="dropdown header-user">
									<a className="nav-link leading-none siderbar-link">
										<span className="mr-3 d-none d-lg-block ">
											<span className="text-gray-white"><span className="ml-2"></span></span>
										</span>
										
									</a>
									
									<a  href="logout.php" className="nav-link leading-none siderbar-link">
										<span className="mr-3 d-none d-lg-block ">
											<span className="text-gray-white"><span className="ml-2">Logout</span></span>
										</span>
										
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										

										
												
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
{/* header ends */}
	{/* horizontal menu starts  */}
<div className="horizontal-main hor-menu clearfix">
  <div className="horizontal-mainwrapper container clearfix">
  <nav  className="horizontalMenu clearfix" >
   <ul className="horizontalMenu-list">
   <li><a href="/home" className="sub-icon active"><i className="typcn typcn-device-desktop hor-icon"></i> Dashboard <i className="fa fa-angle-down horizontal-icon"></i></a>
									
                                    </li>

                                    <li ><a href="#" className="sub-icon">
								 <i className="fa fa-bank"></i>Bank Logs <i className="fa fa-angle-down horizontal-icon"></i></a>
									<div className="horizontal-megamenu clearfix">
										<div className="container">
											<div className="mega-menubg">
												<div className="row">
													<div className="col-lg-3 col-md-12 col-xs-12 link-list">
														<ul>
															<li ><a href="/chasebank">Chase Bank Logs</a></li>
															<li ><a href="/Boa">BOA Logs</a></li>
															<li ><a href="/Suntrust">Suntrust Logs</a></li>
															<li ><a href="/Tdbank">TD Bank USA</a></li>
															<li ><a href="/Citibank">Citi Bank</a></li>
															
															<li ><a href="/WellsFargo">Wells Fargo </a></li>
														</ul>
													</div>
													
													<div className="col-lg-3 col-md-12 col-xs-12 link-list">
														<ul>
														
															<li ><a href="/Chime">CHIME  Logs</a></li>
															<li ><a href="/CapitalOne">CAPITAL ONE  Logs</a></li>
															<li ><a href="/Bbt">BB&T Logs</a></li>
															<li ><a href="/Usaaa">USAA Logs</a></li>
															<li ><a href="/Navyfcu">NAVY FCU Logs</a></li>
															<li ><a href="/Pnc">PNC Logs</a></li>
															<li ><a href="/citizen">Citizens  Logs</a></li>
															 

														</ul>
													</div>
													<div className="col-lg-3 col-md-12 col-xs-12 link-list">
														<ul>
													
															<li ><a href="/Go2Bank">GO2BANK Logs</a></li>
															<li ><a href="/FifthThird">Fifth Third Logs</a></li>
															<li ><a href="/Regions">Regions Logs</a></li>
															<li ><a href="/Huntington">Huntington Logs</a></li>
															<li ><a href="/Keybank">KeyBank Logs</a></li>
															<li ><a href="/Golden">The Golden 1 Credit Union</a></li>
															
															
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>

                                <li ><a href="#ggdf" className="sub-icon"><i className="fa fa-cc"></i>Cards<i className="fa fa-angle-down horizontal-icon"></i></a>
									<ul className="sub-menu">
										<li><a href="visa.php">Visa Card</a></li>
										<li><a href="mastercard.php">MasterCard</a></li>
										<li><a href="amex.php">American Express</a></li>
										
									</ul>
								</li>
                                <li ><a href="#ffsf" className="sub-icon"><i className="typcn typcn-chart-pie-outline">
								    
								</i>Accounts <i className="fa fa-angle-down horizontal-icon"></i></a>
									<ul className="sub-menu">
										<li><a href="cashapp.php">Cashapp</a></li>
										<li><a href="paypal.php">PayPal</a></li>
											<li><a href="shopwithscrip.php">Shopwithscrip Logs</a></li>
										
										
									</ul>
								</li>
                                <li ><a href="#ggdfgfd" className="sub-icon"><i className="typcn typcn-briefcase"></i>CC/Dumps with  bin</a>
									<ul className="sub-menu">
										<li><a href="cvw1.php">CVW1</a></li>
										<li><a href="cvw2.php">CVW2</a></li>
										<li><a href="dumps1.php">DUMPS1</a></li>
										
										
									
										
											</ul>
								</li>
                                <li ><a href="#fsdf" className="sub-icon"><i className="typcn typcn-briefcase"></i> Canada Banks</a>
									<ul className="sub-menu">
										<li ><a href="cibc.php">CIBC BANK</a></li>
										<li ><a href="td.php">TD BANKS</a></li>
										<li ><a href="rbc.php">RBC BANKS</a></li>
										<li ><a href="scotia.php">SCOTIA BANK</a></li>
										
									
										
											</ul>
								</li>

                                <li ><a href="#fsfsf" className="sub-icon"><i className="typcn typcn-briefcase"></i> European Bank</a>
									<ul className="sub-menu">
										<li><a href="barclays.php">Barclays  Bank</a></li>
										<li><a href="lloyd.php">Lloyd Bank</a></li>
										<li><a href="hsbc.php">HSBC Bank</a></li>
										
									
										
											</ul>
								</li>
                                <li><a href="#ghfghfgh" className="sub-icon"><i className="typcn typcn-bitcoin-bag"></i>FULLZ</a>
									<ul className="sub-menu">
										<li><a href="newyork.php">NewYork Fullz</a></li>
										<li><a href="california.php">California fullzs</a></li>
									
										<li><a href="georgia.php">Georgia Fullz</a></li>
										
										
											</ul>
								</li>
                                <li ><a href="btcWallet.php" className="sub-icon ">  BITCOIN WALLET WITH BALANCES</a></li>

   </ul>
  </nav>
  </div>
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
    </div>
  )
}
