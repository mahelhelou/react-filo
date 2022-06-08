import play from '../../assets/images/play-btn-orange.png'

function OneStory() {
	return (
		<section className='likeStories'>
			<div className='container'>
				<h2 className='text-right'>
					قصص قد تعجبك<i className='fa-solid fa-heart pr-1'></i>
				</h2>
				<div className='row mt-3 mb-5'>
					<div className='col-md-3'>
						<div className='stories-section__container'>
							<div className='stories-section__item'>
								<div className='stories-section__item-save'>
									<span>حفظ</span>
									<i className='far fa-bookmark'></i>
								</div>
								<a href='#'>
									<img src={play} />
								</a>
							</div>
							<div className='stories-section__item-info'>
								<div className='stories-section__item-title-rating'>
									<span className='title'>قصة شجرة الدر</span>
									<span className='rating'>
										4.0<i className='fas fa-star'></i>
									</span>
								</div>
								<div className='stories-section__item-views'>
									<span>100 مشاهدة</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='stories-section__container'>
							<div className='stories-section__item'>
								<div className='stories-section__item-save'>
									<span>حفظ</span>
									<i className='far fa-bookmark'></i>
								</div>
								<a href='#'>
									<img src={play} />
								</a>
							</div>
							<div className='stories-section__item-info'>
								<div className='stories-section__item-title-rating'>
									<span className='title'>قصة شجرة الدر</span>
									<span className='rating'>
										4.0<i className='fas fa-star'></i>
									</span>
								</div>
								<div className='stories-section__item-views'>
									<span>100 مشاهدة</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='stories-section__container'>
							<div className='stories-section__item'>
								<div className='stories-section__item-save'>
									<span>حفظ</span>
									<i className='far fa-bookmark'></i>
								</div>
								<a href='#'>
									<img src={play} />
								</a>
							</div>
							<div className='stories-section__item-info'>
								<div className='stories-section__item-title-rating'>
									<span className='title'>قصة شجرة الدر</span>
									<span className='rating'>
										4.0<i className='fas fa-star'></i>
									</span>
								</div>
								<div className='stories-section__item-views'>
									<span>100 مشاهدة</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='stories-section__container'>
							<div className='stories-section__item'>
								<div className='stories-section__item-save'>
									<span>حفظ</span>
									<i className='far fa-bookmark'></i>
								</div>
								<a href='#'>
									<img src={play} />
								</a>
							</div>
							<div className='stories-section__item-info'>
								<div className='stories-section__item-title-rating'>
									<span className='title'>قصة شجرة الدر</span>
									<span className='rating'>
										4.0<i className='fas fa-star'></i>
									</span>
								</div>
								<div className='stories-section__item-views'>
									<span>100 مشاهدة</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default OneStory
