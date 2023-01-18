// import './dashboard.css'
"use client"
import "./login.css"
import React from 'react';


export default function login() {
    return (
        
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
	
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"></input>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"></input>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" class="btn1 mt-4">submit</a>
 
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