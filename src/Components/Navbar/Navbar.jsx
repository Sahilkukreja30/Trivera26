import React from "react";
import "./Navbar.css";
import logoblack from "../Assests/Images/trivera-logo.png";
import { useLocation } from "react-router-dom";
import PillNav from "../../PillNav/PillNave";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Gallery', href: '/gallery' },
    // { label: 'Our Team', href: '/teams-2025' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="navbar">
      <PillNav
        logo={logoblack}
        logoAlt="Trivera Logo"
        items={navItems}
        activeHref={location.pathname}
        ease="power2.out"
        baseColor="#ffffff"           /* resting text = white */
        pillColor="#f5f0e8"           /* pill bg on hover = cream */
        hoveredPillTextColor="#1a1a1a" /* text inside pill on hover = dark */
        pillTextColor="#ffffff"       /* resting text = white */
        initialLoadAnimation={true}
      />
    </div>
  );
};

export default Navbar;