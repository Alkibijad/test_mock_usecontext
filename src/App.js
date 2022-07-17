import "./App.css";
import Feedback from "./Feedback";
import AddFeedback from "./AddFeedback";
import { FeedbackProvider } from "./dataContext";
import FeedbackHeader from "./FeedbackHeader";
import TotalFeedbackNum from "./TotalFeedbackNum";
import AvarageFeedback from "./AvarageFeedback";


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
        <AddFeedback />
      </FeedbackProvider>
    </div>
  );
}

export default App;
