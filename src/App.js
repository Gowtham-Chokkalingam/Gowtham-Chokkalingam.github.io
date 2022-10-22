import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
