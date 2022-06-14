import React from "react";

import profile from "../assets/profile.jpg";
import classes from "./Hero.module.css";
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={`container ${classes.herocontainer}`}>
        <div className={classes["hero_img"]}>
          <img src={profile} alt="profile" />
        </div>
        <div className={classes.intro}>
          <h1>
            Hi <span></span>
          </h1>
          <h1>
            I'm Krutuja <span></span>
          </h1>
          <div className={classes["hide_start"]}>
            <p>Let's Connect on</p>
            <div className={classes["down_img"]}>
              <img
                src="https://img.icons8.com/color-glass/48/undefined/expand-arrow.png"
                alt="arrow"
              />
            </div>

            <a
              href="https://www.linkedin.com/in/krutuja-desai-60aab420b"
              className={classes["download_btn"]}
            >
              Linked <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
