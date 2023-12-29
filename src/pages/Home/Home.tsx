import Nav from "../../components/Nav";
import Hero from "./Hero/Hero";
import PatternDivider from "./PatternDivider/PatternDivider";
import HowItWorks from "./HowItWorks/HowItWorks";
import About from "./About/About";
import Featured from "./Featured/Featured";
import Stories from "./Stories/Stories";
import Login from "@/features/Login/Login";

function App() {
  return (
    <div className="">
      <Nav />
      <Login />
      <Hero />
      <PatternDivider />
      <HowItWorks />
      <About />
      <Featured />
      <Stories />
    </div>
  );
}

export default App;
