import Tshirt from '../StoreImages/t-shirt.jpeg'
import Waterbottle from '../StoreImages/waterbottle.jpeg'
import MuscleT from '../StoreImages/muscle-t.jpeg'

function Storepage() {
  const storeItems = [
    { key: 0, name: 't shirt', price: '$30', src: <Tshirt />, alt: 't-shirt' },
    {
      key: 1,
      name: 'Water Bottle',
      price: '$15',
      src: <Waterbottle />,
      alt: 'waterbottle',
    },
    {
      key: 2,
      name: 'Muscle T',
      price: '$45',
      src: <MuscleT />,
      alt: 'Muscle T',
    },
  ]

  console.log(storeItems)

  const itemsList = storeItems.map((item) => {
    return (
      <div key={item.key} className='store-item'>
        <img src={item.src.type} alt={item.alt} />
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>The store</h1>
      <label>
        Search Here
        <input id='search-bar' type='text'></input>
      </label>
      <button type='submit'>Search</button>
      <div className='store-container'>{itemsList}</div>
    </div>
  )
}

export default Storepage
