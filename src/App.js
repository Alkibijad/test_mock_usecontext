import "./App.css";
import Feedback from "./Feedback";
import AddFeedback from "./AddFeedback";
import { FeedbackProvider } from "./dataContext";
import FeedbackHeader from "./FeedbackHeader";
import TotalFeedbackNum from "./TotalFeedbackNum";
import AvarageFeedback from "./AvarageFeedback";
import AddRating from "./AddRating";


function App() {
  return (
    <div className="App">
      <FeedbackProvider>
        <FeedbackHeader />
          <Feedback /> 
        <div className="stats">
          <TotalFeedbackNum />
          <AvarageFeedback />
        </div>
        <AddRating/>
        <AddFeedback />
      </FeedbackProvider>
    </div>
  );
}

export default App;
