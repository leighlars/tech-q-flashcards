import React, {useState} from 'react'
import './UserComment.scss'

export const UserComment: React.FC = () => {
  const [comments, setComments] = useState<string>('')
  const [formShow, setFormShow] = useState<boolean>(true)

  const hideForm = (e: React.MouseEvent) => {
    e.preventDefault()
    setFormShow(!formShow)
  }

  return(
    <form>
      <textarea
        placeholder= "Candidate notes"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button onClick={(e) => {hideForm(e)}}>Add</button>
    </form>
  )
}