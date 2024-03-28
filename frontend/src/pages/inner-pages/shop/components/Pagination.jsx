import React from "react";

const Pagination = ({ className = "" }) => {
  return (
    <ul className={`d-flex align-items-center ${className} style-none`}>
      <li className="active">
        <button>1</button>
      </li>
      <li>
        <button>2</button>
      </li>
      <li>
        <button>3</button>
      </li>
      <li>
        <button>4</button>
      </li>
      <li>...</li>
      <li>
        <button>Last</button>
      </li>
      <li className="arrow">
        <button>
          <i className="bi bi-arrow-right"></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
