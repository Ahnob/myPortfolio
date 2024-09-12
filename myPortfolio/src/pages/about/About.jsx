import "./about.css";
import Backarrow from "../../components/backarrow/Backarrow";

function About() {
  return (
    <>
    <Backarrow />
      <div className="about-container">
        <h1 className="h2-about">About Me</h1>
        <p className="about-paragraph">
          Hello! I’m Nobz, and my journey into the world of software development
          began with a moment of pure fascination. I vividly remember watching a
          friend code, and it felt like witnessing a spellbinding magic trick.
          The way lines of code could evolve into fully functional applications
          left me mesmerized. Driven by this newfound excitement, I aasked if I
          could also learn it and I was given a course of Udemy(Angela Yu's
          course) I delved into coding myself. I would not say it has been easy,
          in hinsight, its been tough for me because at some point, I had
          school, at another work. I am not where I want to be yet but creating
          this portfolio is a step in the right direction.
        </p>

        <h2 className="h2-about">The Joy of Creation</h2>
        <p className="about-paragraph">
          Writing code in VS Code and seeing it come to life is like a joyous
          revelation. Each successful implementation brings a sense of
          accomplishment and pride, could be compared to the joy of a parent
          watching their child take their first steps. This sense of wonder and
          achievement fuels my passion for development and inspires me to
          continuously learn and grow.
        </p>

        <h2 className="h2-about">What I Do</h2>
        <p className="about-paragraph">
          As a software developer, I’m dedicated to crafting solutions that are
          both innovative and effective. I am currently on the journey to
          perfect Javascript and React. I thrive on the challenge of solving
          complex problems and turning creative ideas into functional software.
        </p>

        <h2 className="h2-about">My Skills</h2>
        <p className="about-paragraph">
          I am always eager to explore new technologies. My approach combines
          technical expertise with a keen eye for detail, ensuring that every
          project I work on is both efficient and user-friendly.
        </p>

        <h2 className="h2-about">Looking Ahead</h2>
        <p className="about-paragraph">
          I’m excited about the endless possibilities in the tech world and am
          constantly seeking opportunities to collaborate, learn, and create.
          Whether it's a personal project or a professional challenge, I bring
          enthusiasm, dedication and a cheerful smile to everything I do.
        </p>

        <h2 className="h2-about">Let’s Connect</h2>
        <p className="about-paragraph">
          I’d love to connect with fellow developers, share ideas, or
          collaborate on exciting projects. Feel free to reach out through
          email, LinkedIn or twitter. Let’s build something amazing together!
        </p>
      </div>
    </>
  );
}

export default About;
