import Dan from '../TrainerImages/dan-trainer.jpeg'
import Jane from '../TrainerImages/jane-owner.jpeg'
import Jim from '../TrainerImages/jim-owner.jpeg'
import Michelle from '../TrainerImages/michelle-trainer.jpeg'

import TrainerCard from '../components/TrainerCard.js'

function Trainerspage() {
  return (
    <div className='trainers-page-container'>
      <div className='trainers-title'>
        <h1>The Trainers</h1>
      </div>
      <div className='trainers-cards-container'>
        <TrainerCard
          picture={Dan}
          alt='Dan the trainer'
          name='Dan'
          position='Personal Trainer'
          specialty='Weight Training, Mixed Martial Arts'
        />
        <TrainerCard
          picture={Jane}
          alt='Jane Co-Owner'
          name='Jane'
          position='Co-Owner'
          specialty='Physical Therapy'
        />
        <TrainerCard
          picture={Jim}
          alt='Jim Co-Owner'
          name='Jim'
          position='Co-Owner'
          specialty='Weight Training'
        />
        <TrainerCard
          picture={Michelle}
          alt='Michelle the yogi'
          name='Michelle'
          position='Personal Trainer'
          specialty='Yoga'
        />
      </div>
    </div>
  )
}

export default Trainerspage
