import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import FeaturedItems from "./components/FeaturedItems";
import Card from "./components/Card";
import HeroBanner2 from "./components/HeroBanner2";
import Card2 from "./components/Card2";
import Search from "./components/Search";
import HeroBanner3 from "./components/HeroBanner3";
import Videos from "./components/Videos";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="header">
        <Logo />
        <Navbar />
      </div>
      <div className="container ">
        <HeroBanner />
        <FeaturedItems />
        <Card />
        <HeroBanner2 />
        <Card2 />
      </div>

      <Search />

      <div className="container">
        <HeroBanner3 />
        <Videos />
        <Reviews />
      </div>

      <Footer />
    </>
  );
}

export default App;
