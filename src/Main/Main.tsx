import React, {useEffect, useState} from 'react'
import {Question} from '../Question/Question'
import {UserInfo} from '../UserInfo/UserInfo'

interface MainProps {
  endQuestions: string[]
  user: {name: string, questions: string[]}
  addUserQuestion: (question: string) => void
}

export const Main: React.FC<MainProps> = props => {
  const [question, setQuestion] = useState<string>('')

  useEffect(() => {
    getRandomQuestion()
  }, [])

  const getRandomQuestion = () => {
    const randomIndex = Math.round(Math.random() * props.endQuestions.length)
    const randomQuestion = props.endQuestions[randomIndex]
    setQuestion(randomQuestion)
    props.addUserQuestion(randomQuestion)
  }
  
  return(
    <div>
      {props.endQuestions.length > 0 &&
        <Question question={question} getRandomQuestion={getRandomQuestion} user={props.user}/>  
      } 
      {props.user.name &&
        <UserInfo user={props.user}/>
      }
    </div>
  )

}