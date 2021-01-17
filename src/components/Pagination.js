import React from "react";
import left from "../images/arrow-left.svg";
import right from "../images/arrow-right.svg";

const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  return (
    <nav>
      <ul className="pagination">
        <li className="pagination-btn" onClick={() => paginate(1)}>
          <img src={right} alt="" />
        </li>
        <li>
          <span className="bold"> {currentPage} </span> of{" "}
          <span className="bold"> {totalPages} </span>
        </li>
        <li className="pagination-btn" onClick={() => paginate(-1)}>
          <img src={left} alt="" />
        </li>
        {/* {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))} */}
      </ul>
    </nav>
  );
};

export default Pagination;
