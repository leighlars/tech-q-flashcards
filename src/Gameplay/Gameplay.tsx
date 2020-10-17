import React, {useState} from 'react'
import './Gameplay.scss'

interface GameplayProps {
  showGameplayModal: Function
}

export const Gameplay: React.FC<GameplayProps> = props => {


  return(
    <div className='gameplay-modal'>
      <button onClick={(e) => {props.showGameplayModal(false)}}>X</button>
      <h2>Gameplay</h2>
      <p>- Tech Interview Question Practice</p>
      <p>- Interviewer asks candidate appropriate questions to their tech focus</p>
      <p>- Full stack round available via 'All' setting</p>
      <p>- Practice alone or play with friends via video conferencing</p>
      <p>- Best if played with friends for optimal interview feedback</p>
      <p>- Enter candidate's name to keep track of questions asked</p>
      <p>- One person is interviewer, one person is candidate</p>
      <p>- Other players may privately message interviewer their thoughts on candidate to write in comment box</p>
      <p>- Each round has 5 questions</p>
      <p>- Interviewer will add notes once interview is complete, click 'add', and notes will render to discuss with candidate</p>
      <p>- At the end of the round, the interviewer will be alerted to compile group comments and submit in form</p>
      <p>- At the end of the round, the interviewer will be alerted to compile group comments and submit in form</p>
      <p>- The interviewer can screenshot the candidate card and send image to candidate for later review</p>
      <p>- Click 'End Round' to end the round and play again</p>
      <h3>Good luck!!</h3>
    </div>
  )
}