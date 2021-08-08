import Footer from "./components/footer/Footer";
import Heaader from "./components/header/Heaader";
import Nav from "./components/nav/Nav";
import BannerSection from "./components/section/BannerSection";
import BestSeller from "./components/section/BestSeller";
import Companies from "./components/section/Companies";
import Discover from "./components/section/Discover";
import NewArrivals from "./components/section/NewArrivals";
import PopularCategory from "./components/section/PopularCategory";

import "./global.css";

function App() {
  return (
    <>
      <Heaader />
      <Nav />

      <BannerSection />
      <Companies />
      <NewArrivals />
      <Discover />
      <PopularCategory />
      <BestSeller />
      <Footer />
    </>
  );
}

export default App;
