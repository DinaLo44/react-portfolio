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
          <h2>Prep Starts Now</h2>
          <br></br>
          <div className="card">
            <img
              alt="Prep Starts Now project"
              src={require("../images/prep-starts-now.jpg")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/benbushman98/Prep-Start-Now">
              CLICK ON ME!
            </a>
          </button>
          <br></br>
          <br></br>
          <h3>Visit the deployed website here:</h3>
          <br></br>
          <button>
            <a href="http://www.prepstartsnow.com">
              CLICK ON ME!
            </a>
          </button>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Regex GitHub Gist</h2>
          <br></br>
          <div className="card">
            <img
              alt="Regex gist project"
              src={require("../images/regex-gist.png")}
            ></img>
          </div>
          <h3>Visit the deployed GitHub page here:</h3>
          <br></br>
          <button>
            <a href="https://gist.github.com/DinaLo44/402fa7216eb7dba9eb4873cd0e2ac7d1">
              CLICK ON ME!
            </a>
          </button>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>GitSurveys</h2>
          <br></br>
          <div className="card">
            <img
              alt="GitSurveys homepage"
              src={require("../images/gitsurveys.png")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/benbushman98/gitsurveys">
              CLICK ON ME!
            </a>
          </button>
          <br></br>
          <br></br>
          <h3>Visit the deployed website here:</h3>
          <br></br>
          <button>
            <a href="https://www.gitsurveys.com/">CLICK ON ME!</a>
          </button>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Utah Outdoors</h2>
          <br></br>
          <div className="card">
            <img
              alt="Regex gist project"
              src={require("../images/bestoutdoorplacesutah.png")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/DinaLo44/miniproject-utahoutdoors">
              CLICK ON ME!
            </a>
          </button>
          <br></br>
          <br></br>
          <h3>Visit the deployed GitHub page here:</h3>
          <br></br>
          <button>
            <a href="https://dinalo44.github.io/miniproject-utahoutdoors/">
              CLICK ON ME!
            </a>
          </button>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Cuddly Robot Food Crawl</h2>
          <br></br>
          <div className="card">
            <img
              alt="Cuddly-Robot homepage"
              src={require("../images/cuddly-robot.png")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/benbushman98/cuddly-robot">
              CLICK ON ME!
            </a>
          </button>
          <br></br>
          <br></br>
          <h3>Visit the deployed website here:</h3>
          <br></br>
          <button>
            <a href="https://benbushman98.github.io/cuddly-robot/">
              CLICK ON ME!
            </a>
          </button>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Weather Dashboard 4 Travelers Application</h2>
          <br></br>
          <div className="card">
            <img
              alt="Weather dashboard app screenshot"
              src={require("../images/weather-app.png")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/DinaLo44/weather-dashboard-4travelers">
              CLICK ON ME!
            </a>
          </button>
          <br></br>
          <br></br>
          <h3>Visit the deployed website here:</h3>
          <br></br>
          <button>
            <a href="https://dinalo44.github.io/weather-dashboard-4travelers/">
              CLICK ON ME!
            </a>
          </button>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="projects-list">
          <h2>Code Quiz JS Application</h2>
          <br></br>
          <div className="card">
            <img
              alt="Code Quiz JS app screenshot"
              src={require("../images/code-quiz.png")}
            ></img>
          </div>
          <h3>Visit the GitHub repository here:</h3>
          <br></br>
          <button>
            <a href="https://github.com/DinaLo44/code-quiz-js">CLICK ON ME!</a>
          </button>
          <br></br>
          <br></br>
          <h3>Visit the deployed website here:</h3>
          <br></br>
          <button>
            <a href="https://dinalo44.github.io/code-quiz-js/">CLICK ON ME!</a>
          </button>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Project;
