import { Navbar, Home, About, Projects, IndustryImpact, Contact, Blogs, Media } from "./components";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <br />
      <br />
      <About />
      <Projects />
      <IndustryImpact />
      <Blogs />
      <Media />
      <Contact />
    </div>
  );
}

export default App;
