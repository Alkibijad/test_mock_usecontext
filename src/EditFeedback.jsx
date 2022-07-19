import React from 'react'

function EditFeedback({ id, editFeedback }) {
  return (
      <div className='btn btn_edit' onClick={() => { editFeedback(id)}}>Edit</div>
  )
}

export default EditFeedback