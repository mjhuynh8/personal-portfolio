import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
