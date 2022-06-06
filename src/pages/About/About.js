import showcaseImage from '../../assets/images/showcase.jpg'
// About page component
function About() {
	return (
		<section class='contact py-5'>
			<div class='container'>
				<div class='row'>
					<div class='col-md-6'>
						<div class='contact__img'>
							<img class='img-fluid' src={showcaseImage} alt='Filo about us page' />
						</div>
					</div>
					<div class='col-md-6'>
						<div class='contact__message pt-0 pt-md-5'>
							<h3 class='contact__message-title'>فريق عمل رائع!</h3>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</p>
						</div>
					</div>
				</div>
				<div class='row'>
					<div class='col-md-6'>
						<div class='contact__message pt-0 pt-md-5'>
							<h3 class='contact__message-title'>فريق عمل رائع!</h3>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</p>
						</div>
					</div>
					<div class='col-md-6'>
						<div class='contact__img'>
							<img class='img-fluid' src={showcaseImage} alt='Filo about us page' />
						</div>
					</div>
				</div>
				<div class='row'>
					<div class='col-md-6'>
						<div class='contact__img'>
							<img class='img-fluid' src={showcaseImage} alt='Filo about us page' />
						</div>
					</div>
					<div class='col-md-6'>
						<div class='contact__message pt-0 pt-md-5'>
							<h3 class='contact__message-title'>فريق عمل رائع!</h3>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
