import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="About">
      <div className="header">
        <h1>Purpose</h1>
        <p>
          Our team was formed to create a React App that lets you search for
          YouTube videos using the YouTube API to showcase all our knowledge and
          abilities so far as front-end developers.{" "}
        </p>
      </div>
      <section className="header2">
        <h3>Our Team Members</h3>
        <section>
          <div className="Carlos">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQF_Ycn50dNslQ/profile-displayphoto-shrink_800_800/0/1608600668883?e=1626912000&v=beta&t=BfmmUCj9ke4k_XmxY34gqHuldYNOcl3sO510CfLZ380"
              alt="Carlos-Hidalgo-pic"
              className="top"
            />
            <h5>Carlos Hidalgo</h5>
            <p>
              I am a Full Stack Web Developer with a dream to bring the future
              of coding to impoverished countries. With a drive to create
              opportunities for other minorities like myself to jump-start their
              careers so that they can create the tomorrow yet to come.
            </p>
            <a
              href="https://github.com/chidalgo1221"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              Github
            </a>
          </div>
          <div className="Jonathan">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGVHtguPoUxHA/profile-displayphoto-shrink_400_400/0/1610292719417?e=1626912000&v=beta&t=CbDwnz57LjSUeHL_37xQPWRXj9_hNBko8Dt1EP2bPgg"
              alt="Jonathan-Bedon-pic"
            />
            <h5>Jonathan Bedon</h5>
            <p>
              I am a Ecuadorian that aims to tackle problems with a multitude of
              tools, making problem solving a very rewarding chase. As a Full
              Stack Web Developer these skills will enhance my ability to
              progress is the Software Development world.
            </p>
            <a
              href="https://github.com/bedonjonathan"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              Github
            </a>
          </div>
          <div className="Jordan">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGHrHnaYg8tWA/profile-displayphoto-shrink_400_400/0/1610333357392?e=1626912000&v=beta&t=5Ff5r-Ig4hiOWAO64qxeVzbSznVBRx2P5C7ZmFRqu1I"
              alt="Jordan-Bobadilla-pic"
            />
            <h5>Jordan Bobadilla</h5>
            <p>
              I am a Music Producer and a Software Developer who wants to leave
              a legacy in this world. With my background in Music Production, I
              develop and create tools for music producers and mixing and
              mastering engineers around the world. "Believe it"
            </p>
            <a
              href="https://github.com/jordanbobadilla"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              Github
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
