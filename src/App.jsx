import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorksGrid from "./components/WorksGrid";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Softwares from "./components/Softwares";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
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