import Logos from "./components/logos";
import  Main  from "./components/main";
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Trust from "./components/trust";
import Working from "./components/working";
import Customer from "./components/customer";
import Cases from "./components/cases";
import Building from "./components/building";
import Design from "./components/design";
import Stack from "./components/stack";
import Alcaline from "./components/alcaline";
import Feature from "./components/feature";
import Hire from "./components/hire";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div className="scroll-smooth">
   <Navbar />
   <Main />
   <Slider/>
   <Trust/>
   <Working/>
   <Logos/>
   <Customer/>
   <Cases/>
   <Building/>
   <Design/>
   <Stack/>
   <Alcaline/>
   <Feature/>
   <Hire/>
   <Footer/>
   
   </div>
  );
}
