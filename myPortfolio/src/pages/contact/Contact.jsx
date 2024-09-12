import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
import Backarrow from "../../components/backarrow/Backarrow";

const Contact = () => {
  return (
    <div>
      <Backarrow />
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="social-media">
          <h4>You could also contact me using any of these</h4>
          <div className="gap">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.pinterest.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPinterest} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
