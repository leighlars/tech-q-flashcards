import React, {useState} from 'react'
import './Header.scss'
import {Gameplay} from '../Gameplay/Gameplay'

interface HeaderProps {
  organizeQuestions: Function
}

export const Header: React.FC<HeaderProps> = props => {
  const [gameplayDisplay, showGameplayModal] = useState(false)

  return(
    <header>
      <h1>Tech Interview Questions</h1>
      <nav>
        <button onClick={(e) => props.organizeQuestions('fe')}>FE</button>
        <button onClick={(e) => props.organizeQuestions('be')}>BE</button>
        <button onClick={(e) => props.organizeQuestions('all')}>All</button>
        <button onClick={(e) => {showGameplayModal(true)}}>Gameplay</button>
        {gameplayDisplay &&
          <Gameplay showGameplayModal={showGameplayModal}/>
        }
      </nav>
    </header>
  )
}