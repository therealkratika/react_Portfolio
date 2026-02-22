import react from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";  
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
function App() {
  return (
   <>
   <Navbar />
   <Home />
   <About />
    <Project />
    <Skills />
    <Contact />
   </>
  );
}

export default App;