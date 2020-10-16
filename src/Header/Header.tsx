import React from 'react'
import './Header.scss'

interface HeaderProps {
  organizeQuestions: Function
}


export const Header: React.FC<HeaderProps> = props => {

  const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const endType = e.target.name
    props.organizeQuestions(endType)
  } 


  return(
    <header>
      <h1>Tech Interview Questions</h1>
      <nav>
        <button name='fe' onClick={(e) => clickHandler(e)}>FE</button>
        <button name='be' onClick={(e) => clickHandler(e)}>BE</button>
        <button name='all' onClick={(e) => clickHandler(e)}>All</button>
      </nav>
    </header>
  )
}