import "../component-styles/App.scss";
import "../assets/images/gap-1-bg.webp";
import "../assets/images/gap-2-bg.webp";

import Hero from "./Hero";
import Store from "./Store";
import About from "./About";
import Contact from "./Contact";
import Gap from "./Gap";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Store />
      <Gap img={0} />
      <About />
      <Gap img={1} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
