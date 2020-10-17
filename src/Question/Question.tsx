import React from 'react'
import './Question.scss'

interface QuestionProps {
  question: string
  getRandomQuestion: Function
  user: {name: string, questions: string[]}
}

export const Question: React.FC<QuestionProps> = props => {

  return(
    <div className='question-card'>
      {props.user.questions.length === 5 && <p>INTERVIEWER: STOP & ADD NOTES</p>}
      <h3>{props.question}</h3>
      <button 
        onClick={() => {props.getRandomQuestion()}}
        className={props.user.questions.length === 5 ? 'end-round' : 'next-question'}
        >
        {props.user.questions.length === 5 ? 'End Round' : 'Next Question'}
      </button>
    </div>
  )
}