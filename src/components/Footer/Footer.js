function Footer() {
	return (
		<footer className='site-footer '>
			<div className='footer_black'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-sm-12'>
							<h3>تسجيل الدخول في الموقع </h3>
							<div className='mt-3'>
								<div className='offset-md-2'>
									<form className='subscribeForm' action=''>
										<div className='form-group'>
											<button className='btn subscribeBtn'>تسجيل الدخول</button>
											<input type='email' className='form-control subscribeInput' placeholder='االبريد الالكتروني' />
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='footer-menu text-center'>
								<ul>
									<li>
										<a href='#'>من نحن</a>
									</li>
									<li>
										<a href='#'>تواصل معنا</a>
									</li>
									<li>
										<a href='#'>شروط</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-5'>
							<div className='row end-page'>
								<div className='col-md-3'>
									<div className='footer-menu text-center'>
										<ul>
											<li>
												<a>palestine,Gaza</a>
											</li>
											<li>
												<a>+44 345 678 903</a>
											</li>
											<li>
												<a>filo@gmail.com</a>
											</li>
										</ul>
									</div>
								</div>
								<div className='col-md-2'>
									<div className='footer-menu text-center'>
										<ul>
											<li>
												<a href='#'>
													<i className='fa-brands fa-instagram'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa-brands fa-twitter'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa-brands fa-facebook-f'></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
