import React from 'react';
import potraitImage from '../../assets/images/christian-carmona-potrait.jpg';
import "./index.css"

function About() {
    return (
        <section className="">
            <img src={potraitImage} className='' style={{width: "20%"}} alt="Portrait of Christian Carmona"></img>
            <h2>About Me</h2>
            <p>I am a full stack web developer with skills in Front-end development such as HTML, JavaScript, and CSS. I also
                have Back-end experience with Node.js, Express, and MySQL.
            </p>
            <p>
                In a previous career, I was a Marine in the United
                States Marine Corps. During my service, I obtained various methods for problem-solving and troubleshooting issues
                creatively that were not within the scopes of a technical manual.
            </p>
            <p>
                As a web developer, I am able to passionately
                carry these skills with me to “think outside the box”, problem-solve, and learn continuously to grow and bring my
                absolute best to companies where I can continue to master my craft.
            </p>
        </section>
    );
}

export default About;