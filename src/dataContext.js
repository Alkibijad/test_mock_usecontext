import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [editID, setEditID] = useState(null);
  const [toEdit, setToEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(10)


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
      rating: rating, 
    };
    // fetch("http://localhost:5000/feedback", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newFeedback),
    // }).then((response) => response.json()).then((data) => { setFeedback([data, ...feedback])})

    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    console.log(data);
    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "DELETE",
    });
    setFeedback(feedback.filter((el) => el.id !== id));
  };
  const editFeedback = (id) => {
    setEditID(id);
    setToEdit(true);
  };

  const saveEdit = async (text) => {
    setToEdit(false);

    const response = await fetch(`http://localhost:5000/feedback/${editID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    }).then((res) => {
      console.log(res);
    });

    fetchFeedback();
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedBack,
        deleteFeedback,
        editFeedback,
        editID,
        toEdit,
        saveEdit,
        disabled,
        setDisabled,
        setRating,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
