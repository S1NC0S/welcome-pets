import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import PatternDivider from "./components/PatternDivider/PatternDivider";
import HowItWorks from "./components/HowItWorks/HowItWorks";

function App() {
  return (
    <div className="font-fredoka">
      <Nav />
      <Hero />
      <PatternDivider />
      <HowItWorks />
    </div>
  );
}

export default App;
