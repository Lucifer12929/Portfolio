import React from "react";
import "./About.css";
import Prateek from "../../Images/man.jpg";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-9">About Me</h1>
        <div className="row">
          <div
            className="col-md-5 col-sm-12 mb-3  aboutImg"
            data-aos="fade-right"
          >
            <img src={Prateek} alt="my profile" />
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p>
              I'm a passionate Full stack web developer with the goal of working on
              a project that solves problems with thoughtful UI design, creating
              intuitive, dynamic user experiences powered by strong backend. I
              primarily work with MERN stack among the full stack technologies.
              The satisfaction that I get while working and completing every
              project made me do more and more. And I believe, that I
              can make creative and responsive projects in future.
            </p>

            
            
          </div>
        </div>
      </InfoContainer>
    </>
  );
}

export default About;
