import React, {useState} from 'react'
import './UserComment.scss'

export const UserComment: React.FC = () => {
  const [comment, setComment] = useState<string>('')
  const [formDisplay, setFormDisplay] = useState<boolean>(true)

  const hideForm = (e: React.MouseEvent) => {
    e.preventDefault()
    setFormDisplay(false)
  }

  const jsxForm = (
    <form>
      <textarea
        placeholder= "Candidate notes"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={(e) => {hideForm(e)}}>Add</button>
    </form>)

  return(
    <>
    {formDisplay === true ? jsxForm : <p className='comment-text'>{comment}</p> } 
    </>
  )
}