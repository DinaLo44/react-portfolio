import React from "react";
import "./ProjectStyles.css";
const Project = () => {
  return (
    <div className="projects-section">
      <div className="project-content">
        <h1 className="project-title">Take a look at some of my Projects!</h1>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Team Profile Generator</h2>
          <br></br>
          <div className="card-projects">
            <img
              alt="team-profile-generator project"
              src={require("../images/team-profile-generator.png")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/DinaLo44/team-profile-generator">
              CLICK ON ME
            </a>
          </button>
        </div>
        <br></br>
        <hr className="division"></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>NoSQL Social Network API</h2>
          <br></br>
          <div className="card-projects">
            <img
              alt="NoSQL-Social-Network-API project"
              src={require("../images/NoSQL-Social-Network-API.PNG")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/DinaLo44/NoSQL-social-network-api">
              CLICK ON ME
            </a>
          </button>
        </div>
        <br></br>
        <hr className="division"></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Employee Tracker App</h2>
          <br></br>
          <div className="card-projects">
            <img
              alt="NoSQL-Social-Network-API project"
              src={require("../images/employee-tracker-app.PNG")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/DinaLo44/employee-tracker-app">
              CLICK ON ME
            </a>
          </button>
        </div>
        <br></br>
        <hr className="division"></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Regex GitHub Gist</h2>
          <br></br>
          <div className="card-projects">
            <img
              alt="Regex gist project"
              src={require("../images/regex-gist.png")}
            ></img>
          </div>
          <h3>Visit the deployed GitHub page here:</h3>
          <br></br>
          <button>
            <a href="https://gist.github.com/DinaLo44/402fa7216eb7dba9eb4873cd0e2ac7d1">
              CLICK ON ME
            </a>
          </button>
        </div>
        <br></br>
        <hr className="division"></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Weather Dashboard 4 Travelers Application</h2>
          <br></br>
          <div className="card-projects">
            <img
              alt="Weather dashboard app screenshot"
              src={require("../images/weather-app.png")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/DinaLo44/weather-dashboard-4travelers">
              CLICK ON ME
            </a>
          </button>
          <br></br>
          <br></br>
          <h3>Visit the deployed website here:</h3>
          <br></br>
          <button>
            <a href="https://dinalo44.github.io/weather-dashboard-4travelers/">
              CLICK ON ME
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
