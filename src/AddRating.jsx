import React, { useContext } from "react";
import FeedbackContext from "./dataContext";

function AddRating() {
  const { setRating } = useContext(FeedbackContext);

  const Rating = (num) => {
    setRating(num);
  };

  return (
    // <div className="rating_number_container">
    //   <li className="rating">
    //     <input type="radio" name="rating" value="1" />
    //     <label htmlFor="">1</label>
    //   </li>
    //   <li className="rating">
    //     <input type="radio" name="rating" value="1" />
    //     <label htmlFor="">1</label>
    //   </li>
    // </div>
    <div className="rating_number_container">
      <ul >
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`} className="rating">
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
         
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default AddRating;
