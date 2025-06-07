import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import VehicleOne from "./pages/VehicleOne";
import VehicleTwo from "./pages/VehicleTwo";
import VehicleThree from "./pages/VehicleThree";
import VehicleFour from "./pages/VehicleFour";
import VehicleFive from "./pages/VehicleFive";
import VehicleSix from "./pages/VehicleSix";
import VehicleSeven from "./pages/VehicleSeven";
import VehicleEight from "./pages/VehicleEight";
import VehicleNine from "./pages/VehicleNine";
import { useEffect, useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import Logoheader from "/logo-header.svg";
import PageToTop from "./components/PageToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";


export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center gap-4 items-center h-screen ">
        <img src={Logoheader} className="w-48" />
        <ImSpinner3 className="w-10 h-10 text-babyblue animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <PageToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/buying-assistance" element={<VehicleOne />} />
        <Route path="/services/auto-transport" element={<VehicleTwo />} />
        <Route path="/services/warehousing" element={<VehicleThree />} />
        <Route path="/services/automobile-loading" element={<VehicleFour />} />
        <Route path="/services/motorcycle-loading" element={<VehicleFive />} />
        <Route path="/services/boat-loading" element={<VehicleSix />} />
        <Route
          path="/services/heavy-machinery-loading"
          element={<VehicleSeven />}
        />
        <Route path="/services/dismantling" element={<VehicleEight />} />
        <Route path="/services/part-purchase-assistance" element={<VehicleNine />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton/>
      <Newsletter />
      <Footer />
    </>
  );
}
