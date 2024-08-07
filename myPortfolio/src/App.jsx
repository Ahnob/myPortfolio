import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
