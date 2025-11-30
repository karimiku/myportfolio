import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen custom-scrollbar relative bg-slate-900">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
