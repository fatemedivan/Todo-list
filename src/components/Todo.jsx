import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function Todo({title , completed , id ,handleRemove , handleComplete}) {
 
  return (
    <div>
      <div className={`todo ${completed ? 'completed' : ''}`} style={{ display: "flex" }}>
        <li className="todo-item">{title}</li>

        <button onClick={()=>handleComplete(id)} className="check-btn">
          <FaCheck />
        </button>

        <button onClick={()=> handleRemove(id)} className="trash-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
