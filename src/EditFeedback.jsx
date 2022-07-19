import React from 'react'

function EditFeedback({ id, editFeedback }) {
  return (
      <div onClick={() => { editFeedback(id)}}>Edit</div>
  )
}

export default EditFeedback