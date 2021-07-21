import LOGO from '../ic_fitness_center_black_24px.svg'

function Header() {
  return (
    <div className='section-container'>
      <div className='header-container'>
        <img className='header-logo' src={LOGO} alt='gym logo' />
        <nav className='header-nav-container'>
          <ul className='header-nav-links-container'>
            <a className='header-nav-link' href='/'>
              <li>About</li>
            </a>
            <a className='header-nav-link' href='/'>
              <li>Store</li>
            </a>
            <a className='header-nav-link' href='/'>
              <li>Our Gym</li>
            </a>
            <a className='header-nav-link' href='/'>
              <li>Trainers</li>
            </a>
            <a className='header-nav-link' href='/'>
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
