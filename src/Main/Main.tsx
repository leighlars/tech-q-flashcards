import React, {useState} from 'react'
import './Main.scss'
import {Question} from '../Question/Question'


interface MainProps {
  endQuestions: string[]
}

export const Main: React.FC<MainProps> = props => {
  const [question, setQuestion] = useState('')

  const getRandomQuestion = () => {
    const randomIndex = Math.round(Math.random() * props.endQuestions.length)
    const randomQuestion = props.endQuestions[randomIndex]
    return (<Question question={randomQuestion}/>)
  }

  return(
    {getRandomQuestion}
  )

}