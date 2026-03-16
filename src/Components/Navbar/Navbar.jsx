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
    { label: 'Our Team', href: '/teams-2025' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Guidelines', href: '/guideline' },
  ];

  return (
    <div className="navbar">
      <PillNav
        logo={logoblack}
        logoAlt="Trivera Logo"
        items={navItems}
        activeHref={location.pathname}
        ease="power2.out"
        baseColor="#1a1a1a"           /* hover circle fill = dark */
        pillColor="#1a1a1a"           /* pill bg on hover = dark */
        hoveredPillTextColor="#f5f0e8" /* text inside pill on hover = cream */
        pillTextColor="#1a1a1a"       /* resting text = dark */
        initialLoadAnimation={true}
      />
    </div>
  );
};

export default Navbar;