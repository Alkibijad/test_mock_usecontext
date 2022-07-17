import React, { useContext, useState } from "react";
import FeedbackContext from "./dataContext";

function AddFeedback() {
  const { addFeedBack } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setText(e.target.value);
      setDisabled(false);
    }
  };

  return (
    <div>
      <form onChange={handleChange}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button
          type="button"
          disabled={disabled}
          onClick={() => {
            addFeedBack(text);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddFeedback;
