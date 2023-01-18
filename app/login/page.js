// import './dashboard.css'
"use client"
import "./login.css"
import React, { useState } from 'react';
import axios from "axios";



export default function login() {

	const URL = "http://127.0.0.1:8000/login/";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(false);

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
		setShowError(false);
	};

	const handleChangePassword = (event) => {
		setPassword(event.target.value);
		setShowError(false);
	};

	const handleLogin = (event) => {
		event.preventDefault();
		let formData = {
			email: email,
			password: password,
		};
		console.log()

		axios
			.post(URL, formData)
			.then((res) => {
				localStorage.setItem("access", JSON.stringify(res.data["access"]));
				localStorage.setItem("refresh", JSON.stringify(res.data["refresh"]));
				localStorage.setItem("email", JSON.stringify(email));
			})
			.catch((err) => {
				setShowError(true);
			});
	};












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
												<form onSubmit={handleLogin} method="post">

													<div className="form-group">
														<input onChange={handleChangeEmail} type="email" name="email" className="form-style" placeholder="Your Email" id="email" autoComplete="off"></input>
														<i className="input-icon uil uil-at"></i>
													</div>
													<div className="form-group mt-2">
														<input onChange={handleChangePassword} type="password" name="password" className="form-style" placeholder="Your Password" id="password" autoComplete="off"></input>
														<i className="input-icon uil uil-lock-alt"></i>
													</div>
													{showError && (
														<p className="error-msg">Invalid username or password</p>
													)}
													<button type="submit" className="btn1 mt-4">submit</button>
												</form>

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