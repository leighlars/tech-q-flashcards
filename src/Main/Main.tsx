import React, {useState} from 'react'
import './Main.scss'
import {Question} from '../Question/Question'
import { questions } from '../data/questions'


interface MainProps {
  endQuestions: string[]
}

export const Main: React.FC<MainProps> = props => {
  const [randomQuestion, setRandomQuestion] = useState('')

  const getRandomQuestion = () => {
    const randomIndex = Math.round(Math.random() * props.endQuestions.length)
    const question = props.endQuestions[randomIndex]
    setRandomQuestion(question)
  }

  const nextQuestion = () => {
    getRandomQuestion()
  }

  return(
    <div>
      <Question question={randomQuestion} nextQuestion={nextQuestion} />
    </div>
  )

}