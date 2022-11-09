import React from 'react'
import "./ProjectStyles.css"
const Project = () => {
  return (
    <div className="projects-section">
    <div className="project-content">
        <h1 className="project-title">
            Take a look at some of my Projects!
        </h1>
        <br></br>
        <p className="project-description">
          As a junior web developer I have a strong desire to improve my skills.</p>
        <p>In this section you will find some of the projects I have developed in the last 6 months.</p>
        <br></br>
        <br></br>
        <div className="projects-list">
            <h2>Regex GitHub Gist</h2>
            <h3>Visit the deployed GitHub page here:</h3>
            <br></br>
            <button>
            <a href="https://gist.github.com/DinaLo44/402fa7216eb7dba9eb4873cd0e2ac7d1">CLICK ON ME!</a>
            </button>
         </div>
<br></br>
          <div className="card">
            <img alt="Regex gist project" src={require('../images/regex-gist.png')} ></img>
          </div>
<br></br>
<br></br>
       <div className="projects-list">
          <h2>Employer Tracker Application</h2>
            <h3>Visit the GitHub repository here:</h3>
            <br></br>
            <button>
            <a href="https://github.com/DinaLo44/employee-tracker-app">CLICK ON ME!</a>
            </button>
      </div>     
          <br></br>
          <div className="card">
            <img alt="Employee Tracker project screenshot" src={require('../images/employee-tracker-app.PNG')} ></img>
          </div>
        <br></br>
        <br></br>  
          <div className="projects-list">
          <h2>Team Profile Generator</h2>
            <h3>Visit the GitHub repository here:</h3>
            <br></br>
            <button>
            <a href="https://github.com/DinaLo44/team-profile-generator">CLICK ON ME!</a>
            </button>
          </div>
<br></br>
          <div className="card">
            <img alt="Team Profile generator screenshot" src={require('../images/team-profile-generator.png')} ></img>
          </div>
          <div className="projects-list">
          <h2>NoSQL Social Network API</h2>
            <h3>Visit the GitHub repository here:</h3>
            <br></br>
            <button>
            <a href="https://github.com/DinaLo44/NoSQL-social-network-api">CLICK ON ME!</a>
            </button>
          </div>
<br></br>
          <div className="card">
            <img alt="NoSQL Social Network API screenshot" src={require('../images/NoSQL-Social-Network-API.PNG')} ></img>
          </div>

          <div className="projects-list">
          <h2>Weather Dashboard 4 Travelers Application</h2>
            <h3>Visit the GitHub repository here:</h3>
            <br></br>
            <button>
            <a href="https://github.com/DinaLo44/weather-dashboard-4travelers">CLICK ON ME!</a>
            </button>
            <br></br>
            <br></br>
            <h3>Visit the deployed Application here:</h3>
            <br></br>
            <button>
            <a href="https://dinalo44.github.io/weather-dashboard-4travelers/">CLICK ON ME!</a>
            </button>
          </div>
<br></br>
          <div className="card">
            <img alt="Weather dashboard app screenshot" src={require('../images/weather-app.png')} ></img>
          </div>

          <div className="projects-list">
          <h2>Code Quiz JS Application</h2>
            <h3>Visit the GitHub repository here:</h3>
            <br></br>
            <button>
            <a href="https://github.com/DinaLo44/code-quiz-js">CLICK ON ME!</a>
            </button>
            <br></br>
            <br></br>
            <h3>Visit the deployed Application here:</h3>
            <br></br>
            <button>
            <a href="https://dinalo44.github.io/code-quiz-js/">CLICK ON ME!</a>
            </button>
          </div>
<br></br>
          <div className="card">
            <img alt="Code Quiz JS app screenshot" src={require('../images/code-quiz.png')} ></img>
          </div>

        </div>

    </div>


    
  )
}

export default Project