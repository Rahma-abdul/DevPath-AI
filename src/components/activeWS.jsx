import { useState } from "react";
import { useNavigate} from "react-router-dom";

function ActiveWS({ title }) {
    const project_name = String(title).toUpperCase();
  
    //const navigate = useNavigate();

  return (
    <div className="active-ws-card">
        <h1 className="ws-title">{project_name}</h1>
        <h1 className="details">72% Complete</h1>
        <h1 className="details">16 Hours left</h1>
        <h1 className="details">14 Tasks Completed</h1>
    </div>
  );
}
export default ActiveWS;
