import React, { useContext, useEffect } from 'react'
import FeedbackContext from './dataContext'

function AvarageFeedback() {
    const { feedback} = useContext(FeedbackContext)

    const displayAverageRate = () => {
        let average = null;
        average = Math.floor(feedback.reduce((acc, { rating} ) => { 
            return acc + rating / feedback.length
        },0))
        return average

     }
    
  return (
    <div className='average_rate'>Average rate: {displayAverageRate()}</div>
  )
}

export default AvarageFeedback