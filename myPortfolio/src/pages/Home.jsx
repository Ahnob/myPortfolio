import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "./projects/Projects";
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
