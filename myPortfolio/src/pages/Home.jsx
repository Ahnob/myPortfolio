import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
