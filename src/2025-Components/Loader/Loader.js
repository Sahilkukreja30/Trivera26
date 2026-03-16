import React, { useEffect } from 'react'
import Logo from '../../Images/trivera-logo.png'
import './loader.css'

export default function Loader() {
  useEffect(() => {
    // Function to add 'loaded' class to body after 4 seconds
    const timeoutId = setTimeout(() => {
      document.querySelector('body').classList.add('loaded')
    }, 2500) // Ensures the loader runs for 4 seconds

    // Clean up: clear timeout if the component unmounts
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div id="loader-wrapper">
      {/* SVG loader animation */}
      <div className="loaderbox">
        <img src={Logo} alt="Sheen Logo" className="loader-logo" />
      </div>
      {/* Overlay sections for transition effect */}
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  )
}
