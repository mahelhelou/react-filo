import payment from '../../assets/images/payment.png'

function Payments() {
	return (
		<section className='paymentSection'>
			<div className='container'>
				<div className='row mb-3'>
					<div className='col-md-4 text-center align-self-center'>
						<img src={payment} alt='' />
					</div>
					<div className='col-md-4 align-self-center'>
						<h5 className='mb-3 font-weight-bold'>ما مميزات الاشتراك في موقع فيلو؟</h5>
						<ul className='plans__features'>
							<li>مسارات لا نهائية من القصص</li>
							<li>مشاهدة بلا حدود</li>
							<li>الإلغاء في أي وقت</li>
							<li>تحميل القصص المفضلة للاستماع إليها بدون إنترنت</li>
						</ul>
					</div>
					<div className='col-md-4'>
						<div className='card'>
							<div className='card-header text-center'>
								<h2>عملية دفع آمنة</h2>
							</div>
							<div className='card-body'>
								<h5 className='card-title'>طريقة الدفع</h5>
								<p className='card-text'>الخطوة 2/2 تفاصيل الدفع</p>
								<div className='card-payment'>
									<div className='card'>
										<h4>بطاقة الائتمان / الخصم المباشر</h4>
										<p className='mt-5'>ادفع ببطاقة الائتمان أو الخصم. بعد إدخال تفاصيل بطاقتك، قد تتم إعادة توجيهك إلى checkout.com أو البنك الذي تتعامل معه لإكمال طريقة الدفع بنظام الأمان ثلاثي الأبعاد</p>
										<form>
											<div className='form-group'>
												<label htmlFor='formGroupExampleInput'>رقم البطاقة</label>
												<input type='text' className=' incard' id='formGroupExampleInput' placeholder='123456789' />
												<span>
													<i className='fas fa-credit-card'></i>
												</span>
											</div>
											<div className='row'>
												<div className='col'>
													<div className='form-group '>
														<label htmlFor='formGroupExampleInput2'>تاريخ الانتهاء </label>
														<input type='text' id='formGroupExampleInput2' placeholder='15/12/2023' />
													</div>
												</div>
												<div className='col confirm'>
													<div className='form-group'>
														<label htmlFor='formGroupExampleInput2'>رمز التحقق من البطاقة</label>
														<input type='text' id='formGroupExampleInput2' placeholder='123' />
														<span>
															<i className='fas fa-credit-card'></i>
														</span>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className='form-check mt-4'>
									<label className='form-check-label' htmlFor='defaultCheck1'>
										أقبل الشروط
										<a href=''>Storytel Unlimited</a>
									</label>
									<input className='form-check-input-reverse' type='checkbox' value='' id='defaultCheck1' />
								</div>
								<h3 className='listeNow mt-4'>استمع بلا حدود</h3>
								<h6 className='text-center pay'>
									ادفع الأن <mark>50%</mark>
								</h6>
								<a href='#' className='btn btn-block'>
									اشترك الان
								</a>
								<p className='p'>من الجيد أن تعرف: بعد 3 أيام ، سيتحول الاشتراك تلقائيًا إلى اشتراك منتظم وستدفع 50 دولار بعد 30 يوم</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Payments
