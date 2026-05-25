import { useState } from "react";

import "./index.css";

import Navbar from "./components/Navbar/Navbar";

import Intro from "./components/Intro/Intro";

import About from "./components/About/About";

import Skills from "./components/Skills/Skills";

import Projects from "./components/Projects/Projects";

import Experience from "./components/Experience/Experience";

import CustomCursor from "./components/UI/CustomCursor";

import SmoothScroll from "./components/UI/SmoothScroll";

import {
  PremiumScrollBar,
} from "./components/UI/PremiumEffects";

import Loader from "./components/UI/Loader";

const App = () => {
  const [loaderFinished, setLoaderFinished] =
    useState(false);

  return (
    <div
      className="
      bg-black
      text-white
      min-h-screen
      overflow-x-hidden
      "
    >
      {/* LOADER */}
      {!loaderFinished && (
        <Loader
          onFinish={() =>
            setLoaderFinished(true)
          }
        />
      )}

      {/* ENABLE WEBSITE SCROLL ONLY AFTER LOADER */}
      {loaderFinished && <SmoothScroll />}

      {/* GLOBAL UI */}
      <CustomCursor />

      <PremiumScrollBar />

      {/* NAVBAR */}
      <Navbar />

      {/* WEBSITE */}
      <main
        className="
        relative
        z-10
        bg-black
        "
      >
        <Intro />

        <About />

        <Skills />

        <Experience />

        <Projects />
      </main>
    </div>
  );
};

export default App;