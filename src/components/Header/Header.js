import logo from '../../assets/images/logo.png'

// Main header component
function Header() {
	return (
		<nav class='navbar fixed-top navbar-expand-lg navbar-light bg-light px-3 py-4'>
			<div class='container-fluid'>
				<a class='navbar-brand' href='index.html'>
					<div class='navbar-brand__box'>
						<img src={logo} alt='Filo logo' />
					</div>
				</a>
				<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#main-menu' aria-controls='main-menu' aria-expanded='false' aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='main-menu'>
					<ul class='navbar-nav mx-auto'>
						<li class='nav-item active'>
							<a class='nav-link' href='index.html'>
								الصفحة الرئيسية<span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='cultural-stories.html'>
								قصص حضارية
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='multi-track-stories.html'>
								قصص متعددة المسارات
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='contact.html'>
								تواصل معنا
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='about.html'>
								من نحن
							</a>
						</li>
					</ul>
					<div class='navbar__actions'>
						<i class='fas fa-search search-btn'></i>
						<i class='fas fa-bell'></i>
						<i class='fas fa-user' data-toggle='modal' data-target='#login-form'></i>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
