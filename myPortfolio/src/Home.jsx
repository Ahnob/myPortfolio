import Projects from "./components/Projects";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
