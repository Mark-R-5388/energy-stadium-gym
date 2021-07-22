import Image from '../gym-main-image.jpeg'
function Homepage() {
  return (
    <div className='homepage-container'>
      <div className='homepage-column-text'>
        <h1 className='page-title homepage-title'>Energy Stadium</h1>
        <p className='homepage-text'>The energy here will change your life!</p>
      </div>
      <div className='homepage-column-image'>
        <img className='homepage-image' src={Image} alt='man doing pullup' />
      </div>
    </div>
  )
}

export default Homepage
