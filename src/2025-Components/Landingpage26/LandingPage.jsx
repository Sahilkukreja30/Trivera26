import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { gsap } from "gsap";
import img4 from "../../Images/auto.png";
import shapeImg from "../../Images/Shape.png";

const DELAY = 2.5; // global start delay in seconds

export default function LandingPage() {
  const navigate = useNavigate();

  const wrapperRef   = useRef(null);
  const cursorRef    = useRef(null);
  const followerRef  = useRef(null);

  const line1Ref     = useRef(null);
  const line2Ref     = useRef(null);
  const line3Ref     = useRef(null);
  const subtextRef   = useRef(null);
  const ctaRef       = useRef(null);

  const loadingRef   = useRef(null);

  const guitarRef    = useRef(null);

  const orbOrangeRef = useRef(null);
  const orbPinkRef   = useRef(null);
  const orbPurpleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      window.addEventListener("mousemove", (e) => {
        gsap.to(cursorRef.current,   { x: e.clientX, y: e.clientY, duration: 0.05 });
        gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.22 });
      });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: DELAY });

      tl.from(line1Ref.current, { y: 80, opacity: 0, duration: 1.1 })
        .from(line2Ref.current, { y: 80, opacity: 0, duration: 1.1 }, "-=0.75")
        .from(line3Ref.current, { y: 80, opacity: 0, duration: 1.1 }, "-=0.75")
        .from(subtextRef.current, { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.55")
        .from(loadingRef.current, { scale: 0, rotation: -10, opacity: 0, duration: 0.6, ease: "back.out(2.5)" }, "-=0.45")
        .from(guitarRef.current,
               { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)" }, "-=0.5");

      const floatEl = (el, yAmp, xAmp, rot, dur, delay = 0) => {
        gsap.to(el, {
          y:        `+=${yAmp}`,
          x:        `+=${xAmp}`,
          rotation: `+=${rot}`,
          duration: dur,
          repeat:   -1,
          yoyo:     true,
          ease:     "sine.inOut",
          delay:    DELAY + delay,
        });
      };

      floatEl(guitarRef.current,    14, -8,  -6, 3.2, 0.3);
      floatEl(loadingRef.current,   8,  10,  6,  3.0, 0.2);

      gsap.to(ctaRef.current, { y: "-=6", duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: DELAY + 1 });

      gsap.to(orbOrangeRef.current, { x: 60,  y: 40,  duration: 9,  repeat: -1, yoyo: true, ease: "sine.inOut", delay: DELAY });
      gsap.to(orbPinkRef.current,   { x: -50, y: -30, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut", delay: DELAY + 2 });
      gsap.to(orbPurpleRef.current, { x: 40,  y: -50, duration: 7,  repeat: -1, yoyo: true, ease: "sine.inOut", delay: DELAY + 1 });

      gsap.to(loadingRef.current, {
        boxShadow: "0 0 18px 4px #00e676",
        duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: DELAY,
      });

      gsap.to(".word-one", {
        color: "#FF9500",
        duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: DELAY,
      });

      gsap.to(guitarRef.current, {
        rotation: "+=15",
        duration: 1.8, repeat: -1, yoyo: true, ease: "power1.inOut", delay: DELAY,
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="cursor"          ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />

      <div className="landing-wrapper" ref={wrapperRef}>

        {/* Background shape layer */}
        <div className="shape-layer">
          <img src={shapeImg} alt="geometric pattern" />
        </div>

        {/* Background orbs */}
        <div className="orb orb-orange" ref={orbOrangeRef} />
        <div className="orb orb-pink"   ref={orbPinkRef}   />
        <div className="orb orb-purple" ref={orbPurpleRef} />

        {/* Sticker badges */}
        <div className="sticker sticker-loading" ref={loadingRef}>LOADING…</div>

        {/* cutout4 → auto slot — right side top */}
        <span className="emoji emoji-auto" ref={guitarRef}>
          <img src={img4} alt="cutout 4" />
        </span>

        {/* Hero content */}
        <div className="hero-content">
          <div className="hero-heading">
            <span className="hero-line-1" ref={line1Ref}>1 FEST.</span>
            <span className="hero-line-2" ref={line2Ref}>2 DAYS.</span>
            <span className="hero-line-3" ref={line3Ref}>3 ERAS.</span>
          </div>

          <p className="hero-subtext" ref={subtextRef}>
            For a few unforgettable days, DAVV becomes a playground of ambition and creativity where the impossible becomes inevitable.
          </p>

          <div className="cta-group" ref={ctaRef}>
            <button className="btn-explore" onClick={() => navigate("/")}>
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </>
  );
}