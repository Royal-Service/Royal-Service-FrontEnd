// import './dashboard.css'
"use client"
import "./login.css"
import React from 'react';



export default function login() {
    return (
        
	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
	
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"></input>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"></input>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" className="btn1 mt-4">submit</a>
 
				      					</div>
			      					</div>
			      				</div>
                  
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
    )
}