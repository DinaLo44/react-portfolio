import "./AboutDescriptionStyles.css";

import React from "react";

const AboutDescription = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-right">
          <h1>Welcome to my Website!</h1>
          <br></br>
          <p>
            Hello! I am Dina, a Junior Web Developer who recently earned a Full
            Stack Web Development Certificate from the University of Utah.{" "}
          </p>
          <br></br>
          <p>
            I am an American citizen originary from Mexico where I earned a
            bachelor's degree in International Relations from the Autonomous
            University of Tamaulipas. I have experience working in the
            diplomatic and legal fields after I worked as a consular officer for
            8 years at the Mexican Consulate in Salt Lake City, Utah, and as an
            immigration paralegal for almost 4 years.
          </p>
          <br></br>
          <p>
            {" "}
            After all the valuable experience I have gained, I decided to apply
            my skills in a field where I could contribute in a more creative way
            and at a higher scale by creating applications that will produce a
            positive impact in people's lives. I want to be part of solutions to
            help people and organizations to fulfill their goals!.
          </p>
        </div>
        <div className="about-left">
          <img src={require("../images/myphoto.jpg")} alt="Dina Brady" />
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
