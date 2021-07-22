import LOGO from '../ic_fitness_center_black_24px.svg'
import Homepage from '../pages/Homepage.js'
import Aboutpage from '../pages/Aboutpage.js'
import Storepage from '../pages/Store.js'
import Trainerspage from '../pages/Trainers.js'
import Contactpage from '../pages/Contact.js'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Header() {
  return (
    <Router>
      <div className='header-container'>
        <img className='header-logo' src={LOGO} alt='gym logo' />
        <nav className='header-nav-container'>
          <ul className='header-nav-links-container'>
            <Link className='header-nav-link' to='/'>
              <li>Home</li>
            </Link>
            <Link className='header-nav-link' to='/about'>
              <li>About</li>
            </Link>
            <Link className='header-nav-link' to='/store'>
              <li>Store</li>
            </Link>
            <Link className='header-nav-link' to='/trainers'>
              <li>Trainers</li>
            </Link>
            <Link className='header-nav-link' to='/contact'>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/about' component={Aboutpage} />
        <Route path='/store' component={Storepage} />
        <Route path='/trainers' component={Trainerspage} />
        <Route path='/contact' component={Contactpage} />
      </Switch>
    </Router>
  )
}

export default Header
