import { useContext } from "react";
import FeedbackContext from "./dataContext";
import DeleteFeedback from "./DeleteFeedback";
import EditFeedback from "./EditFeedback";


function Feedback() {
  const {feedback, deleteFeedback, editFeedback} = useContext(FeedbackContext);

  return (
    <div className="feedback_container">
      {feedback.map((el, index) => {
        return (

          <div key={index} className="feedback_card">
            <p>R:{ el.rating}</p>
            <p>{el.text}</p>
            <div className="edit_delete_box">
            <DeleteFeedback  id={el.id} deleteFeedback={deleteFeedback} />
            <EditFeedback  id={el.id} editFeedback={editFeedback } />


            </div>
          </div>

        );
      })}
    </div>
  );
}

export default Feedback;


