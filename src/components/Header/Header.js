import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

// Main header component
function Header() {
	// Assign location to a variable
	const location = useLocation()

	// Destructuring path name from location
	const { pathname } = location

	// Get the name of the path in an array
	const splitLocation = pathname.split('/')

	return (
		<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light px-3 py-4'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<div className='navbar-brand__box'>
						<img src={logo} alt='Filo logo' />
					</div>
				</Link>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#main-menu' aria-controls='main-menu' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='main-menu'>
					<ul className='navbar-nav mx-auto'>
						<li className={`nav-item ${splitLocation[1] === '' ? ' active' : ''}`}>
							<Link className='nav-link' to='/'>
								الصفحة الرئيسية<span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className={`nav-item ${splitLocation[1] === 'cultural-stories' ? ' active' : ''}`}>
							<Link className='nav-link' to='/cultural-stories'>
								قصص حضارية
							</Link>
						</li>
						<li className={`nav-item ${splitLocation[1] === 'multi-track-stories' ? ' active' : ''}`}>
							<Link className='nav-link' to='/multi-track-stories'>
								قصص متعددة المسارات
							</Link>
						</li>
						<li className={`nav-item ${splitLocation[1] === 'contact' ? ' active' : ''}`}>
							<Link className='nav-link' to='/contact'>
								تواصل معنا
							</Link>
						</li>
						<li className={`nav-item ${splitLocation[1] === 'about' ? ' active' : ''}`}>
							<Link className='nav-link' to='/about'>
								من نحن
							</Link>
						</li>
					</ul>
					<div className='navbar__actions'>
						<i className='fas fa-search search-btn'></i>
						<i className='fas fa-bell'></i>
						<i className='fas fa-user' data-toggle='modal' data-target='#login-form'></i>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
