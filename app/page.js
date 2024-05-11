import Logos from "./components/logos";
import  Main  from "./components/main";
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Trust from "./components/trust";
import Working from "./components/working";
import Customer from "./components/customer";

export default function Home() {
  return (
   <div>
   <Navbar />
   <Main />
   <Slider/>
   <Trust/>
   <Working/>
   <Logos/>
   <Customer/>
   
   </div>
  );
}
