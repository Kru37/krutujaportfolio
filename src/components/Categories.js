import React from "react";
import classes from "./Categories.module.css";
const Categories = ({ categories, handleData }) => {
  const handleClick = (e) => {
    const type = e.target.textContent;
    const allbtns = document.querySelectorAll(".btn_search");
    allbtns.forEach((item) => {
      if (item.textContent === e.target.textContent) {
        item.classList.add("active");
      } else {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      }
    });
    handleData(type);
  };
  return (
    <ul className={classes["btn-container"]}>
      {categories.map((item) => {
        return (
          <button
            className="filter-btn btn_search"
            key={item}
            onClick={handleClick}
          >
            {item}
          </button>
        );
      })}
    </ul>
  );
};

export default Categories;
