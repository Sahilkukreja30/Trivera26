import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./frontpage2025.css";
import SideMarquee2 from "../../2025-Components/sidemarquee2/sidemarquee2";
import TypePara from "../../2025-Components/TypePara/TypePara";
import TypePara2 from "../../2025-Components/typepara2/typepara2";
import { ReactComponent as NumberSvg } from "../Assests/Images/Group 104.svg";
import { ReactComponent as Cultural } from "../Assests/Images/Group 106.svg";
import { ReactComponent as SPEAKERS } from "../Assests/Images/Group 105.svg";

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const FrontPage2025 = ({ onScaleComplete }) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const yearRef = useRef();
  const taglineRef = useRef();
  const lineOverlayRef = useRef();
  const zeroRef = useRef();
  const culturalRef = useRef();
  const speakersRef = useRef();
  const [visibleTexts, setVisibleTexts] = useState([false, false, false, false]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const debouncedRefresh = debounce(() => {
      ScrollTrigger.refresh();
    }, 250);

    const getScrollDistance = () => {
      return window.innerWidth <= 768 ? 1000 : 2000;
    };

    // Setup blinking letters effect
    const letters = document.querySelectorAll(".tagline-letter25");
    const addBlinkingEffect = debounce(() => {
      letters.forEach((letter) => {
        const shouldBlink = Math.random() > 0.6;
        if (shouldBlink) {
          letter.classList.add("blinking25");
        } else {
          letter.classList.remove("blinking25");
        }
      });
    }, 250);

    const blinkingInterval = setInterval(addBlinkingEffect, 3000);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top",
        end: `+=${getScrollDistance()}`,
        scrub: true,
        pin: true,
        onLeave: debounce(() => onScaleComplete && onScaleComplete(), 250),
        onRefresh: (self) => {
          self.end = `+=${getScrollDistance()}`;
        },
      },
    });

    // Initial container animation
    timeline.fromTo(
      containerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Animate year container first (without the "11", cultural, and speakers)
    timeline.fromTo(
      yearRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" },
      "<"
    );

    // Hide "zero", cultural, and speakers containers initially
    gsap.set(yearRef.current.querySelector(".zero"), { opacity: 0 });
    gsap.set(culturalRef.current, { opacity: 0 });
    gsap.set(speakersRef.current, { opacity: 0 });
    
    // Animate "zero", cultural, and speakers containers together
    timeline.to(
      [yearRef.current.querySelector(".zero"), culturalRef.current, speakersRef.current],
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      "+=0.5"
    );

    // Add initial state for line-overlay
    gsap.set(lineOverlayRef.current, { opacity: 0 });

    // Animate tagline and line-overlay together
    timeline.fromTo(
      [taglineRef.current, lineOverlayRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "+=0.5"
    );

    textRefs.current.forEach((text, index) => {
      timeline.fromTo(
        text,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          onStart: () => {
            setVisibleTexts(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          },
          onReverseComplete: () => {
            setVisibleTexts(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        "+=0.2"
      );
    });

    // Fade out tagline and line-overlay together
    timeline.to(
      [taglineRef.current, lineOverlayRef.current, ...textRefs.current],
      { opacity: 0, duration: 1, ease: "power2.out" },
      "+=0.5"
    );

    const zero = yearRef.current.querySelector(".zero");
    const zeroBounds = zero.getBoundingClientRect();
    const containerBounds = containerRef.current.getBoundingClientRect();

    const xOffset = zeroBounds.left + zeroBounds.width / 2 - (containerBounds.left + containerBounds.width / 2);
    const yOffset = zeroBounds.top + zeroBounds.height / 2 - (containerBounds.top + containerBounds.height / 2);
    const leftOffset = 0;
   
    // Original zoom animation
    timeline.to(containerRef.current, {
      scale: 30,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      transformOrigin: `${50 + ((xOffset - leftOffset) / containerBounds.width) * 100}% ${50 + (yOffset / containerBounds.height) * 100}%`,
      onComplete: debounce(() => {
        onScaleComplete && onScaleComplete();
      }, 250),
    });

    const handleResize = () => {
      debouncedRefresh();
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.vars.end = `+=${getScrollDistance()}`;
        trigger.refresh();
      });
    };

    window.addEventListener("resize", handleResize);
    ScrollTrigger.refresh();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(blinkingInterval);
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onScaleComplete]);

  return (
    <div className="main-container25">
      <SideMarquee2 isRight={true} />
      <div ref={containerRef} className="frontpage-container25">
        <div className="landing_2025_stars"></div>
        <div ref={lineOverlayRef} className="line-overlay25"></div>
        <div className="year-container25">
          <span ref={yearRef} className="year25">
            <div ref={culturalRef} className="cultural-container">
              <Cultural />
            </div>
            <p className="month">MARCH</p>
            <span ref={zeroRef} className="zero">
              <NumberSvg />
            </span>
            <span className="full-year">2025</span>
            <div ref={speakersRef} className="speakers-container">
              <SPEAKERS/>
            </div>
          </span>
        </div>
        <div className="tagline-container25" ref={taglineRef}>
          <div className="tagline25">
            {Array.from("THE DOOR TO THE WITHIN IS OPEN-STEP THROUGH AND DISCOVER.").map(
              (char, index) => (
                <span key={index} className="tagline-letter25">
                  {char === " " ? "\u00A0" : char}
                </span>
              )
            )}
          </div>
        </div>
        <div className="columns-container25">
          <div className="column25">
            <span ref={(el) => (textRefs.current[0] = el)} className="text25">
              {visibleTexts[0] && <TypePara2 para="WHAT DEFINES YOUR TRUE SELF—THE IMAGE YOU SHOW OR THE THOUGHTS YOU KEEP HIDDEN? " />}
            </span>
          </div>
          <div className="column25">
            <p ref={(el) => (textRefs.current[1] = el)} className="text25">
              <div className="text2">
                {visibleTexts[1] && <TypePara2 para="WHAT HAPPENS WHEN WE EMBRACE OUR CHAOS INSTEAD OF HIDING IT? CAN DISORDER SPARK GROWTH OR GENIUS? " />}
              </div>
            </p>
          </div>
          <div className="column25 combined-column25">
            <p ref={(el) => (textRefs.current[2] = el)} className="text25">
              {visibleTexts[2] && <TypePara2 para="IF THE BODY IS A UNIVERSE OF CELLS AND SIGNALS, ARE YOU AN INDIVIDUAL OR A COLLECTIVE?  " />}
            </p>
            <p ref={(el) => (textRefs.current[3] = el)} className="text25">
              {visibleTexts[3] && <TypePara2 para="OUR SPEAKERS SHARE STORIES THAT SPARK YOUR INNER JOURNEY, LEADING YOU TO NEW DEPTHS OF SELF-DISCOVERY." />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage2025;