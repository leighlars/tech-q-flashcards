import React from 'react'
import './Header.scss'

interface HeaderProps {
  organizeQuestions: Function
}

export const Header: React.FC<HeaderProps> = props => {

  const clickHandler = (type: string) => {
    const endType = type
    props.organizeQuestions(endType)
  } 


  return(
    <header>
      <h1>Tech Interview Questions</h1>
      <nav>
        <button onClick={(e) => clickHandler('fe')}>FE</button>
        <button onClick={(e) => clickHandler('be')}>BE</button>
        <button onClick={(e) => clickHandler('all')}>All</button>
      </nav>
    </header>
  )
}