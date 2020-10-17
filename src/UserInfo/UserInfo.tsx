import React, {useState} from 'react'
import './UserInfo.scss'
import {UserComment} from './UserComment'

interface UserInfoProps {
  user: {name:string, questions: string[]}
}

export const UserInfo: React.FC<UserInfoProps> = props => {

  const userQuestions = props.user.questions.map(question => {
    return <p className='user-question'>- {question}</p>
  })

  return(
    <section className='user-card'>
      <h2>{props.user.name}'s Questions</h2>
      {userQuestions}
      <UserComment/>
    </section>
  )

}