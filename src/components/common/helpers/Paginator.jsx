import React from "react";
import { useState } from "react";
import style from "./../../Content/users/style.module.css";

const Paginator = (totaItemCount, onPageChange, currentPage, portionSize = 10,) => {
  let portionCount = Math.ceil(totaItemCount / portionSize);
  let pages = [];
  for (let i = 1; i <= portionCount; i++) {
    pages.push(i);
  }
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  
  return (
    <div>
      {/* Previous button */}
        {portionNumber > 1 && 
        <button
          onClick={() => {
            (setPortionNumber( portionNumber - 1));
          }}
        >
          Previous
          </button>
      }
      {/* Page numbers */}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              onClick={() => onPageChange(p)}
              className={currentPage === p ? style.active : style.inactive}
            >
              {p}
            </span>
          );
        })}
        {/* Next button */}
        {portionCount > portionNumber &&
        <button onClick={()=> (setPortionNumber (portionNumber + 1 ))}>
          Next
          </button>} 
    </div>
  );
};

export default Paginator;
