import monster from '../../assets/images/monster.png'

// Page not found page
function PageNotFound() {
	return (
		<section className='error-404'>
			<h2>Ooops...</h2>
			<img src={monster} alt='Page Not Found!' />
		</section>
	)
}

export default PageNotFound
