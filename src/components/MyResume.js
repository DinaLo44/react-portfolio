import React from 'react';
import "./ResumeStyles.css";

const Resume = () => {
  return (
    <>
    <div className= "container">
      <h1 className="title">Technical Skills</h1>
       <div className= "table-position"> 
        <table>
          <tr>
            <th>
              Platforms
            </th>
            <th>
              Software Packages
            </th>
            <th>
             Frontend
            </th>
            <th>
            Backend
           </th>
          </tr>
          <tr>
            <td>
            GitHub
            </td>
            <td>
              Microsoft Office
            </td>
            <td>
            HTML5
            </td>
            <td>
            Node
           </td>
           </tr>
           <tr>
            <td>
              GitLab
            </td>
            <td>
              Outlook
            </td>
           <td>
            CSS3
           </td>           
           <td>
           Express
           </td>
           </tr>
           <tr>
            <td>
            </td>
            <td>
            Zoom
            </td>
            <td>
           JQuery
           </td>
            <td>
            MySQL
           </td>
           </tr>
           <tr>
           <td>
           </td>
           <td>
           </td>
           <td>
           Bootstrap
           </td>
           <td>
          NoSQL(MongoDB)
           </td>
           </tr>
           <tr>
            <td>
            </td>
            <td>
            </td>
            <td>
           React
           </td> 
          <td>
            MERN
          </td>
           </tr>
</table>
 </div>
 <br></br>
 <br></br>
 <h4>Feel free to download my resume here:</h4>
 <a href={require("../images/Dina Brady-Resume Download1.pdf")} download="Dina Brady's Resume">
   Dina Brady's Resume
 </a>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>


    </div>
    </>
  )
}

export default Resume