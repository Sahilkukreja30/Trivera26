import "./App.css";
import Loader from "./2025-Components/Loader/Loader";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import HeroParallax from "./pages/Gallery/hero-parallax";
import Main from "./Components/Main/Main";
import TeamSection from "./Components/shubhansh files/TeamSection";
import Subh from "./Components/Subhanshpage/Subh";

import React, { useState, useEffect } from 'react';
// import Buy from './Components/Buynow/Buy';
import Layout from './Components/Buynow/Layout';
import ScrollToTop from './ScrollToTop';
import Guidelines from './2025-Components/Guidelines/Guidelines';
import LenisProvider from './Components/LenisProvider';
// import TicketPopup from './2025-Components/Ticket Pop-up/TicketPopup';

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const productsData = [
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/5xXKM7h0/Whats-App-Image-2026-03-15-at-5-57-08-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/TB8mnx4Q/Whats-App-Image-2026-03-15-at-5-57-08-PM-2.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/dsGZWVQ6/Whats-App-Image-2026-03-15-at-5-57-08-PM.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/ghPV8mG/Whats-App-Image-2026-03-15-at-5-57-09-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/05Th0Sg/Whats-App-Image-2026-03-15-at-5-57-09-PM-2.jpg",
    },

    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/mFYNwpWL/Whats-App-Image-2026-03-15-at-5-57-09-PM-3.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/zdytZbN/Whats-App-Image-2026-03-15-at-5-57-09-PM.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/66KTvwC/Whats-App-Image-2026-03-15-at-5-57-10-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/WY46Mcm/Whats-App-Image-2026-03-15-at-5-57-10-PM-2.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/N658nDjD/Whats-App-Image-2026-03-15-at-5-57-10-PM.jpg",
    },

    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/fVYJ1bXz/Whats-App-Image-2026-03-15-at-5-57-11-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/gM3NPZsG/Whats-App-Image-2026-03-15-at-5-57-11-PM-2.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/pBbqzPst/Whats-App-Image-2026-03-15-at-5-57-11-PM.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/zT8SbVZ1/Whats-App-Image-2026-03-15-at-5-57-12-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/nNQgcxZT/Whats-App-Image-2026-03-15-at-5-57-12-PM-2.jpg",
    },

    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/pv85V0K9/Whats-App-Image-2026-03-15-at-5-57-12-PM.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/5xXKM7h0/Whats-App-Image-2026-03-15-at-5-57-08-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/TB8mnx4Q/Whats-App-Image-2026-03-15-at-5-57-08-PM-2.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/dsGZWVQ6/Whats-App-Image-2026-03-15-at-5-57-08-PM.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/ghPV8mG/Whats-App-Image-2026-03-15-at-5-57-09-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/05Th0Sg/Whats-App-Image-2026-03-15-at-5-57-09-PM-2.jpg",
    },

    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/mFYNwpWL/Whats-App-Image-2026-03-15-at-5-57-09-PM-3.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/zdytZbN/Whats-App-Image-2026-03-15-at-5-57-09-PM.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/66KTvwC/Whats-App-Image-2026-03-15-at-5-57-10-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/WY46Mcm/Whats-App-Image-2026-03-15-at-5-57-10-PM-2.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/N658nDjD/Whats-App-Image-2026-03-15-at-5-57-10-PM.jpg",
    },

    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/fVYJ1bXz/Whats-App-Image-2026-03-15-at-5-57-11-PM-1.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/gM3NPZsG/Whats-App-Image-2026-03-15-at-5-57-11-PM-2.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/pBbqzPst/Whats-App-Image-2026-03-15-at-5-57-11-PM.jpg",
    },
    {
      title: "",
      link: "",
      thumbnail:
        "https://i.ibb.co/zT8SbVZ1/Whats-App-Image-2026-03-15-at-5-57-12-PM-1.jpg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Loader />
      <div className="hey">
        {isLargeScreen && <LenisProvider />}{" "}
        {/* Only render on large screens */}
        <Router>
          <ScrollToTop />
          <Navbar />
          {/* <Buy /> */}
          {/* <TicketPopup /> */}
          <Layout>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/events' element={<Main />} />
              <Route path='/gallery' element={<HeroParallax products={productsData} />} />
              <Route path='/sponsors' element={<Subh />} />
              <Route path='/guideline' element={<Guidelines />} />
              <Route path='/teams-2024' element={<TeamSection />} />
              <Route path='/teams-2023' element={<TeamSection />} />
              <Route path='/teams-2025' element={<TeamSection />} />
            </Routes>
          </Layout>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
