import gsap from "gsap";
import ImageAbout from "../image About/ImageAbout";
import TypeHeading from "../TypeHeading/TypeHeading";
import TypePara from "../TypePara/TypePara";
import image1 from "../../Images/trivera_about 1.jpg";
import image2 from "../../Images/trivera_about 2.jpg";
import image3 from "../../Images/trivera_about 3.jpg";
import image4 from "../../Images/About Section image 4.jpeg";
import "./About.css";
import cameraSticker from "../../Images/60.png";
import hourglassSticker from "../../Images/9.png";

import React, { useEffect, useRef } from "react";
import TypeSmall from "../Typing Small/TypingSmall";
import SideMarquee from "../Side Marquee/SideMarquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const hourglassRef = useRef(null);

  useEffect(() => {
    gsap.set(hourglassRef.current, { x: 300, autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: ".about_section_3",
      start: "top center",
      end: "bottom top",
      onEnter: () =>
        gsap.to(hourglassRef.current, {
          x: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
        }),
      onLeave: () =>
        gsap.to(hourglassRef.current, {
          x: 300,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.in",
        }),
      onEnterBack: () =>
        gsap.to(hourglassRef.current, {
          x: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
        }),
      onLeaveBack: () =>
        gsap.to(hourglassRef.current, {
          x: 300,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.in",
        }),
    });
  }, []);

  return (
    <>
      <div id="about" className="ABOUT_2025_main bg-black">
        <SideMarquee isRight={false} />

        <div className="about_section_1">
          {/* <div className='about_2025_stars'></div> */}

          <ImageAbout img={image2} />

          <span className=" flex flex-col gap-[50px] max-w-[500px]">
            <TypeHeading className="type-heading" content="PAST ERA" />

            <TypePara para="Nukkad Natak => Powerful performances rooted in traditional street theatre that bring social messages directly to the crowd." />
            <TypePara para="IPL Auction => Strategize, bid, and assemble the ultimate cricket team in a fast-paced mock auction battle." />

            <div className=" lg:self-end md:mt-14 flex lg:flex-col gap-7">
              <TypeSmall
                para="IPL Auction => Strategize, bid, and assemble the ultimate cricket team in a fast-paced mock auction battle.
"
              />
              <TypeSmall para="Nukkad Natak => Powerful performances rooted in traditional street theatre that bring social messages directly to the crowd." />
            </div>
          </span>
        </div>

        <div className="about_section_2">
          {/* <div className='about_2025_stars'></div> */}

          <span
            className=" max-w-[500px]"
            style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}
          >
            <TypeHeading className="type-heading" content="PRESENT ERA" />
            <TypePara para="Ad-Mad Show => Create a powerful advertising concept for a brand or social cause and present it like a real campaign." />
            <TypePara para="Reel Making => Produce a short, engaging reel that tells a story and captures the energy of the moment." />
            <TypePara para="Live Painting => Artists create visual stories live on stage, turning imagination into art in real time." />

            <div className=" self-start flex flex-row gap-7 md:mt-10">
              <TypeSmall
                para="Ad-Mad Show => Create a powerful advertising concept for a brand or social cause and present it like a real campaign.
"
              />
              <TypeSmall
                para="Live Painting => Artists create visual stories live on stage, turning imagination into art in real time.
"
              />
            </div>
          </span>

          <ImageAbout img={image1} />
        </div>

        <div className="about_section_3">
          {/* <div className='about_2025_stars'></div> */}

          <ImageAbout img={image3} />

          <span
            className=" max-w-[500px]"
            style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}
          >
            <TypeHeading className="type-heading" content="FUTURE ERA" />

            <TypePara para="Elevator Pitch => Step into the elevator and pitch your startup idea before time runs out. Convince the judges with clarity, speed, and confidence." />
            <TypePara para="Illusion Inc. => Build a convincing brand, product, or startup concept from scratch and present the illusion like it’s already real." />
            <TypePara para="Innovators => Bring bold ideas to life through rapid creativity and unconventional problem solving. No limits, no templates." />
            <TypePara para="Battle of Bands => Live music takes over as bands compete for the loudest cheers and the strongest stage presence." />
          </span>
        </div>
      </div>
      <img
        ref={hourglassRef}
        src={hourglassSticker}
        alt="hourglass"
        style={{
          position: "fixed",
          top: "80px",
          right: "40px",
          width: "180px",
          height: "auto",
          zIndex: 100,
          pointerEvents: "none",
          display: window.innerWidth < 768 ? "none" : "block",
          opacity: 0,          
          visibility: "hidden",
        }}
      />
    </>
  );
};

export default About;
