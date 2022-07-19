import React from "react";

function DeleteFeedback({ id, deleteFeedback }) {
  return (
    <div
      className="btn btn_delete"
      onClick={() => {
        deleteFeedback(id);
      }}
    >
      X
    </div>
  );
}

export default DeleteFeedback;
