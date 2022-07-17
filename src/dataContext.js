import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();
    setFeedback(data);
  };

  const addFeedBack = async (recievedFeedback) => {
    const newFeedback = {
      text: recievedFeedback,
    };

    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
    };
    
    const deleteFeedback = async (id) => { 
        const response = await fetch(`http://localhost:5000/feedback${id}`, {
            method: "DELETE"
        })
        const data = await response.json()


        let newFeedback = feedback.filter((el) => el.id !== id)
        setFeedback(newFeedback)
    }

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedBack, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
