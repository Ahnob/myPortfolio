// import { Link } from "react-router-dom";
// const Hero = () => {
//   return (
//     <section className="hero">
//       <h1>Hi, I am Anob,</h1>
//       <p>
//         I am a firm believer that you become better when you put your mind to
//         it.
//       </p>
//       <Link href="/projects" className="cta">
//         View My Work
//       </Link>
//     </section>
//   );
// };

// export default Hero;

import { faGithub, FaLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./hero.css";

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-content reveal">
        <h1>Hi, I'm a Creative Developer</h1>
        <p>
          I'm a developer passionate about creating beautiful, functional web
          apps with great user experiences.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <faGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
