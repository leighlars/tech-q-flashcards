import React from 'react'
import './Header.scss'

interface HeaderProps {
  organizeQuestions: Function
}

export const Header: React.FC<HeaderProps> = props => {

  return(
    <header>
      <h1>Tech Interview Questions</h1>
      <nav>
        <button onClick={(e) => props.organizeQuestions('fe')}>FE</button>
        <button onClick={(e) => props.organizeQuestions('be')}>BE</button>
        <button onClick={(e) => props.organizeQuestions('all')}>All</button>
      </nav>
    </header>
  )
}