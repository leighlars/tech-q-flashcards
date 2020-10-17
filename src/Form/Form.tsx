import React, {useState} from 'react'
import './Form.scss'

interface FormProps {
  addUser: (name:string) => void
}

export const Form: React.FC<FormProps> = props => {
  const [userName, setUser] = useState<string>('')

  const clickHandler = (e: React.MouseEvent, user: string)  => {
    e.preventDefault()
    props.addUser(userName)
  }

  return (
    <form>
      <input 
        value={userName}
        onChange={(e) => setUser(e.target.value)}
        placeholder='Candidate name'
      />
      <button onClick={(e) => {clickHandler(e, userName)}}>Go!</button>
    </form>
  )
}