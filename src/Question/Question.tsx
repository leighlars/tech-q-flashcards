import React from 'react'
import './Question.scss'

interface QuestionProps {
  question: string
  getRandomQuestion: Function
}

export const Question: React.FC<QuestionProps> = props => {
  return(
    <div className='question-card'>
      <h2>{props.question}</h2>
      <button onClick={() => {props.getRandomQuestion()}}>Next Question</button>
    </div>
  )
}