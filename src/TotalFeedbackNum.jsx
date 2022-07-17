import React, { useContext, useEffect } from 'react'
import FeedbackContext from './dataContext'

function TotalFeedbackNum() {

    const { feedback } = useContext(FeedbackContext)
    
 
  return (
      <div>Total feedbacks: { feedback.length}</div>
  )
}

export default TotalFeedbackNum