import React, { useContext, useState, useRef, useEffect } from "react";
import FeedbackContext from "./dataContext";

function AddFeedback() {
  const { feedback,editID,toEdit, addFeedBack, saveEdit } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [Btndisabled, setBtnDisabled] = useState(true);
  let textarea = useRef() 

useEffect(() => {
  if (toEdit) {
    let feedbacktoedit = feedback.filter((el) => el.id === editID)
    textarea.current.value = feedbacktoedit[0].text

  }
}, [toEdit])

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setText(e.target.value);
      setBtnDisabled(false);
    }
  };

  return (
    <div className="form_container">
      <form >
        <textarea onChange={handleChange} ref={textarea} name="" id="" cols="30" rows="10"></textarea>
        {toEdit ?
          <button type="button"
            disabled={Btndisabled}
            onClick={() => { saveEdit(text); textarea.current.value = "" }} >Save Edit</button>
          :
          <button type="button"
            disabled={Btndisabled}
            onClick={() => { addFeedBack(text); }}>Submit</button>}
      </form>
    </div>
  );
}

export default AddFeedback;
