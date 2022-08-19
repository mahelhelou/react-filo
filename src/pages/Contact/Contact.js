import showcaseImage from '../../assets/images/showcase-bg.png'

import "./Contact.scss"

// Contact page
function Contact() {
	return (
		<section className='contact py-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='contact__img'>
							<img className='img-fluid' src={showcaseImage} alt='Filo contact us' />
						</div>
					</div>
					<div className='col-md-6'>
						<div className='contact__message pt-0 pt-md-5'>
							<h3 className='contact__message-title'>ابق على تواصل معنا</h3>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</p>
						</div>
					</div>
				</div>
				<div className='row mt-5 text-center'>
					<div className='col-md-4'>
						<div className='mb-4 text-center'>
							<i className='fas fa-map-marker-alt fa-3x text-primary'></i>
						</div>
						<p>فلسطين - غزة - حاضنة الأعمال والتكنولوجيا</p>
					</div>
					<div className='col-md-4'>
						<div className='mb-4 text-center'>
							<i className='fas fa-envelope fa-3x text-primary'></i>
						</div>
						<p>email@domain.com</p>
					</div>
					<div className='col-md-4'>
						<div className='mb-4 text-center'>
							<i className='fas fa-phone fa-3x text-primary'></i>
						</div>
						<p className='dir-left'>(+970) 599 123 456</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
