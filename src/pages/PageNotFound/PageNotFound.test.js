import monster from '../../assets/images/monster.png'

// Error 404 page
function PageNotFound() {
	return (
		<section class='error-404'>
			<h2>Ooops...</h2>
			<img src={monster} alt='هذه الصفحة غير متوفرة!' />
		</section>
	)
}

export default PageNotFound
