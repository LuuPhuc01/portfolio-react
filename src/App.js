import { Element } from "react-scroll";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Totop from "./components/Totop";

function App() {
  const sections = {
    skills: "skills",
    projects: "projects",
    about: "about",
    footer: "footer",
  };
  return (
    <div className=" bg-blue-950 p-10">
      <Header sections={sections} />
      <Banner />
      <Element name={sections.skills}>
        <Skills />
      </Element>
      <Element name={sections.projects}>
        <Projects />
      </Element>
      <Element name={sections.about}>
        <About />
      </Element>
      <Element name={sections.footer}>
        <Footer />
      </Element>
      <Totop />
    </div>
  );
}

export default App;
