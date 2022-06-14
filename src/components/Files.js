import React from "react";

import classes from "./Files.module.css";
const Files = ({ items }) => {
  return (
    <div className={classes["project_center"]}>
      {items.map((item) => {
        return (
          <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
            <div className={classes["single_project"]}>
              <div className={classes["project_img"]}>
                <img src={item.img} alt={item.name} />
              </div>
              <div className={classes.heading}>
                <h3>{item.name}</h3>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Files;
