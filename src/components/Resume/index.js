import React from "react";


const Resume = () => {
  return (
    <div>
      <h1>
        Resume
      </h1>
      <div className="resume-div">
        <section>
          <h5>
            Download my <a className="resume" rel="noreferrer" href="https://docs.google.com/document/d/1IH4iFgHU8bvN_gBRxFoV1YPAyjd0syvqy99iBYFWhiE/edit?usp=sharing" target={"_blank"}>Resume </a>
          </h5>
        </section>
        <section>
          <h2>Front-End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>BootStrap</li>
          </ul>
        </section>
        <section>
          <h2>Back-End</h2>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>Moongoose</li>
            <li>APIs</li>
          </ul>
        </section>
      </div>
    </div>

  )
}

export default Resume;