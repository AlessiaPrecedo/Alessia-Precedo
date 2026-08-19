import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Stack from "./sections/Stack/Stack";
import HowIBuild from "./sections/HowIBuild/HowIBuild";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsApp from "./components/Wsp/Wsp";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Stack />
        <HowIBuild />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;
