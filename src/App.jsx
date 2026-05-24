import './index.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import CustomCursor from './components/UI/CustomCursor';
import SmoothScroll from './components/UI/SmoothScroll';
import { PremiumScrollBar } from './components/UI/PremiumEffects';
const App = () => {
  return (
    <div>
            <CustomCursor />
            <PremiumScrollBar />
            <SmoothScroll />

      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
