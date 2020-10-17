import userEvent from '@testing-library/user-event'
import React from 'react'
import './UserInfo.scss'

interface UserInfoProps {
  user: {name:string, questions: string[]}
}

export const UserInfo: React.FC<UserInfoProps> = props => {
  return(
    <div>
      <h2>{props.user.name}</h2>
    </div>
  )

}