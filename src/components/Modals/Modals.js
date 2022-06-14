// Modals components
function Modals() {
	;<>
		<div className='modal fade' id='login-form' tabindex='-1' role='dialog' aria-labelledby='login-form-label' aria-hidden='true'>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-body'>
						<button className='close' type='button' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>&times;</span>
						</button>

						<img src='images/airplane.gif' alt='airplane' />
						<div className='form-title text-center'>
							<h4 class='text-center mb-3'>تسجيل دخول</h4>
							<div className='d-flex flex-column text-center'>
								<form>
									<div className='form-group'>
										<input id='email1' type='email' placeholder='اسم المستخدم أو البريد الإلكتروني' />
									</div>
									<div className='form-group'>
										<input id='password' type='password' placeholder='كلمة المرور' />
									</div>
									<button className=' btn btn-block btn11 mt-1' type='button'>
										<a>تسجيل الدخول</a>
									</button>
									<p class='mt-3'>
										اذا لم يكن لديك حساب أنشئ{' '}
										<a href='' data-toggle='modal' data-target='#sign-form'>
											حساب جديد
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className='modal fade' id='sign-form' tabindex='-1' role='dialog' aria-labelledby='sign-form-label' aria-hidden='true'>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-body'>
						<button className='close' type='button' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>&times;</span>
						</button>

						<img src='images/airplane.gif' alt='airplane' />
						<div className='form-title text-center'>
							<h4 class='text-center mb-3'>حساب جديد</h4>
							<div className='d-flex flex-column text-center'>
								<form>
									<div className='form-group'>
										<input id='name1' type='text' placeholder='الاسم' />
									</div>
									<div className='form-group'>
										<input id='email1' type='email' placeholder='اسم المستخدم أو البريد الإلكتروني' />
									</div>
									<div className='form-group'>
										<input id='date1' type='text' placeholder='تاريخ الميلاد' />
									</div>
									<div className='form-group'>
										<input id='password' type='password' placeholder='كلمة المرور' />
									</div>
									<div className='form-check mb-3 pr-3 float-right'>
										<input type='checkbox' className='form-check-input' id='exampleCheck1' />
										<label className='form-check-label' htmlFor='exampleCheck1'>
											تذكرني
										</label>
									</div>
									<button className=' btn btn-block btn11' type='button'>
										<a>تسجيل جديد</a>
									</button>
									<p class='mt-3'>
										هل لديك حساب <a href=''>تسجيل دخول</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Modals
