import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import {Benefits} from "./components/benefits"
import Slider from "./components/Carousel/Slider";
import { Features } from "./components/deployment";
import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import Navbar from "./components/Navbar";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      {/* <Navbar/> */}
      <Header data={landingPageData.Header} />

      <Benefits/>

      <Features data={landingPageData.Features} />{/* features is also named as deployment at some places */}
      {/* <About data={landingPageData.About} /> */}
      <Team data={landingPageData.Team} />{/* //under the hood  */}
      {/*SLIDER*/}
      <Slider/>


      {/* demo signup image */}
      <h1 className="heading" >go ahead and signup a demo</h1>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
