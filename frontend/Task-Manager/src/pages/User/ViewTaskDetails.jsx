import React from "react";
import { useParams } from "react-router-dom";

const ViewTaskDetails = () => {
  const params = useParams();
  const taskId = params.id;

  return (
    <div>
      <span>Task Id: {taskId}</span>
    </div>
  );
};

export default ViewTaskDetails;
