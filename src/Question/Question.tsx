import React from 'react'
import './Question.scss'

interface QuestionProps {
  question: string
}

export const Question: React.FC<QuestionProps> = props => {
  
  return(
    <div className='question-card'>
      <h2>props.question</h2>
      <button>Next Question</button>
    </div>
  )
}