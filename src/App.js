import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>

      <Skills></Skills>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
