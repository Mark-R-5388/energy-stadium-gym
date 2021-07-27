function TrainerCard(props) {
  return (
    <div className='trainer-card-container'>
      <img className='trainer-image' src={props.picture} alt={props.alt} />
      <h1 className='trainer-name'>{props.name}</h1>
      <h2 className='trainer-position'>{props.position}</h2>
      <p className='trainer-specialty'>{props.specialty}</p>
    </div>
  )
}

export default TrainerCard
