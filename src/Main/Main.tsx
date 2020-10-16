import React, {useState} from 'react'
import './Main.scss'
import {Question} from '../Question/Question'


interface MainProps {
  endQuestions: string[]
}

export const Main: React.FC<MainProps> = props => {
  const [question, setQuestion] = useState('')
  

  return(
    <Question question={question}/>
  )

}