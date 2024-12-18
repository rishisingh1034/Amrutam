import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Discover from "./components/Discover"
import Card from "./components/AyurvedaCards"
import HarmonySection from "./components/AyurvedaConsultation"
import AyurvedicApproach from "./components/AyurvedicApproach"
import CustomerStories from "./components/CustomerStories"
import AyurvedaExperts from "./components/AyurvedaExperts"
import AppPromotion from "./components/AppPromotion"


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Discover />
      <Card />
      <HarmonySection />
      <AyurvedicApproach />
      <CustomerStories />
      <AyurvedaExperts />
      <AppPromotion />
      <Footer />
    </>
  );
}

export default App;
