import { useContext } from "react";
import FeedbackContext from "./dataContext";
import DeleteFeedback from "./DeleteFeedback";
import EditFeedback from "./EditFeedback";


function Feedback() {
  const {feedback, deleteFeedback} = useContext(FeedbackContext);

  return (
    <div className="feedback_container">
      {feedback.map((el, index) => {
        return (

          <div key={index} className="feedback_card">
            <p>{el.text}</p>
            <DeleteFeedback id={el.id} deleteFeedback={deleteFeedback} />
            <EditFeedback/>
          </div>

        );
      })}
    </div>
  );
}

export default Feedback;


