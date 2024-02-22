import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/body/HeroSection";
import Contact from "./components/body/Contact";
import Apropos from "./components/body/Apropos";
import Services from "./components/body/Services";
import Solutions from "./components/body/Solutions";
import Teams from "./components/body/Teams";
import Partners from "./components/body/Partners";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="text-danger">
      
      <Navbar/>
      <HeroSection/>
      <Apropos/>
      <Services/>
      <Solutions/>
      <Teams/>
      <Partners/>
      <Footer/>

    </div>
  );
}

export default App;
