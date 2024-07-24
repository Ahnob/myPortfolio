import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* <About />
        <Projects />
        <Contact /> */}
      </main>
      {/* <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
}

export default App;
