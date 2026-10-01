import CinematicBackground from "./components/CinematicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorksGrid from "./components/WorksGrid";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Softwares from "./components/Softwares";
import About from "./components/About";

function App() {
  return (
    <div className="relative min-h-screen text-[#e5e5e5]">
      <CinematicBackground />
      <Navbar />
      <main>
        <Hero />
        <WorksGrid />
        <Experience />
        <Education />
        <Softwares />
        <About />
      </main>
    </div>
  );
}

export default App;