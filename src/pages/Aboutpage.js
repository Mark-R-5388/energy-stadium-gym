import Aboutimage from '../about-image.jpeg'

function Aboutpage() {
  return (
    <div className='about-container'>
      <div className='about-image-container'>
        <img className='about-image' src={Aboutimage} alt='about the gym' />
      </div>
      <div className='about-text-container'>
        <h1>About Us</h1>
        <div className='about-text-columns'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus laudantium dolores, optio in, hic tempore quam minus
            quae minima praesentium velit ex beatae ipsum perspiciatis nobis
            quaerat odit quo consequuntur soluta modi. Dolorem maiores corporis
            accusantium illum laudantium similique ducimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            voluptate ex qui voluptatibus nostrum, doloribus praesentium
            quibusdam id. Cum debitis commodi sapiente nostrum ad possimus
            aperiam? Vero eius recusandae alias quam repudiandae. Nobis, quasi
            iure?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
