import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import classes from "./Project.module.css";
import projects from "./data";
import Files from "./Files";
const Projects = () => {
  const [items, setItems] = useState(projects);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let allTypes = projects.map((item) => {
      return item.type;
    });
    allTypes = [...new Set(allTypes)];
    if (!allTypes.includes("All")) {
      allTypes.unshift("All");
    }

    setCategories(allTypes);
  }, []);

  const handleData = (type) => {
    if (type === "All") {
      setItems(projects);
    } else {
      let filteritems = projects.filter((item) => item.type === type);
      setItems(filteritems);
    }
  };
  return (
    <section className={classes.projects}>
      <div className={`container ${classes.projectcontainer}`}>
        <div className="section_title">
          <h2>Projects</h2>
          <div className={classes.underline}></div>
        </div>
        <Categories categories={categories} handleData={handleData} />
        <Files items={items} />
      </div>
    </section>
  );
};

export default Projects;
