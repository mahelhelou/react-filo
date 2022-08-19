import showcaseImage from '../../assets/images/showcase-bg.png'

import './About.scss'

// About page component
function About() {
	return (
		<section className='contact about py-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='contact__img'>
							<img className='img-fluid' src={showcaseImage} alt='Filo about us page' />
						</div>
					</div>
					<div className='col-md-6'>
						<div className='contact__message pt-0 pt-md-5'>
							<h3 className='contact__message-title'>فريق عمل رائع!</h3>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='contact__message pt-0 pt-md-5'>
							<h3 className='contact__message-title'>فريق عمل رائع!</h3>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</p>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='contact__img'>
							<img className='img-fluid' src={showcaseImage} alt='Filo about us page' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='contact__img'>
							<img className='img-fluid' src={showcaseImage} alt='Filo about us page' />
						</div>
					</div>
					<div className='col-md-6'>
						<div className='contact__message pt-0 pt-md-5'>
							<h3 className='contact__message-title'>فريق عمل رائع!</h3>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
