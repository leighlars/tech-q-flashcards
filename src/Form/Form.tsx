import React, {useState} from 'react'
import './Form.scss'

interface FormProps {
  addUser: (name:string) => void
}

export const Form: React.FC<FormProps> = props => {
  const [user, setUser] = useState<string>('')

  const clickHandler = (e: React.MouseEvent, user: string)  => {
    e.preventDefault()
    props.addUser(user)
  }

  return (
    <form>
      <input 
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder='Candidate name'
      />
      <button onClick={(e) => {clickHandler(e, user)}}>Go!</button>
    </form>
  )
}