import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2024 My Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
