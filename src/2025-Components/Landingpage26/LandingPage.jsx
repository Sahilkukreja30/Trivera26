import { useEffect, useRef } from "react";
import "./LandingPage.css";
import { gsap } from "gsap";

export default function LandingPage() {
  const wrapperRef   = useRef(null);
  const cursorRef    = useRef(null);
  const followerRef  = useRef(null);

  // refs for animated elements
  const line1Ref     = useRef(null);
  const line2Ref     = useRef(null);
  const line3Ref     = useRef(null);
  const subtextRef   = useRef(null);
  const ctaRef       = useRef(null);

  const chaosRef     = useRef(null);
  const hornRef      = useRef(null);
  const loadingRef   = useRef(null);

  const rocketRef    = useRef(null);
  const guitarRef    = useRef(null);
  const bulbRef      = useRef(null);
  const coffeeRef    = useRef(null);
  const globeRef     = useRef(null);
  const starRef      = useRef(null);
  const fireRef      = useRef(null);
  const zapRef       = useRef(null);

  const orbOrangeRef = useRef(null);
  const orbPinkRef   = useRef(null);
  const orbPurpleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Cursor ── */
      window.addEventListener("mousemove", (e) => {
        gsap.to(cursorRef.current,   { x: e.clientX, y: e.clientY, duration: 0.05 });
        gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.22 });
      });

      /* ── ENTRANCE: timeline ── */
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // hero text lines
      tl.from(line1Ref.current, { y: 80, opacity: 0, duration: 1.1 })
        .from(line2Ref.current, { y: 80, opacity: 0, duration: 1.1 }, "-=0.75")
        .from(line3Ref.current, { y: 80, opacity: 0, duration: 1.1 }, "-=0.75")
        .from(subtextRef.current, { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.55")

        // stickers
        .from(chaosRef.current,   { scale: 0, rotation: -15, opacity: 0, duration: 0.6, ease: "back.out(2.5)" }, "-=0.5")
        .from(hornRef.current,    { scale: 0, rotation: 20,  opacity: 0, duration: 0.6, ease: "back.out(2.5)" }, "-=0.45")
        .from(loadingRef.current, { scale: 0, rotation: -10, opacity: 0, duration: 0.6, ease: "back.out(2.5)" }, "-=0.45")

        // emojis
        .from([rocketRef.current, guitarRef.current, bulbRef.current, coffeeRef.current,
               globeRef.current, starRef.current, fireRef.current, zapRef.current],
               { scale: 0, opacity: 0, stagger: 0.08, duration: 0.5, ease: "back.out(2)" }, "-=0.5");

      /* ── CONTINUOUS FLOAT: every emoji/sticker gets its own looping tween ── */
      const floatEl = (el, yAmp, xAmp, rot, dur, delay = 0) => {
        gsap.to(el, {
          y:        `+=${yAmp}`,
          x:        `+=${xAmp}`,
          rotation: `+=${rot}`,
          duration: dur,
          repeat:   -1,
          yoyo:     true,
          ease:     "sine.inOut",
          delay,
        });
      };

      floatEl(rocketRef.current,    18, 10,  8,  2.8, 0.0);
      floatEl(guitarRef.current,    14, -8,  -6, 3.2, 0.3);
      floatEl(bulbRef.current,      20, 6,   10, 2.5, 0.6);
      floatEl(coffeeRef.current,    16, -10, -8, 3.0, 0.9);
      floatEl(globeRef.current,     12, 8,   5,  4.0, 0.2);
      floatEl(starRef.current,      22, -6,  12, 2.2, 0.5);
      floatEl(fireRef.current,      18, 10,  -9, 3.5, 0.8);
      floatEl(zapRef.current,       14, -8,  7,  2.7, 0.1);

      floatEl(chaosRef.current,     10, 6,   4,  3.8, 0.4);
      floatEl(hornRef.current,      12, -8,  -5, 4.2, 0.7);
      floatEl(loadingRef.current,   8,  10,  6,  3.0, 0.2);

      /* ── CONTINUOUS SLOW DRIFT: hero text lines ── */
      gsap.to(line1Ref.current, { y: "-=8", duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(line2Ref.current, { y: "+=8", duration: 5.0, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
      gsap.to(line3Ref.current, { y: "-=6", duration: 4.0, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.0 });

      /* ── CONTINUOUS: CTA buttons bob ── */
      gsap.to(ctaRef.current, { y: "-=6", duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

      /* ── CONTINUOUS: orbs drift ── */
      gsap.to(orbOrangeRef.current, { x: 60,  y: 40,  duration: 9,  repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(orbPinkRef.current,   { x: -50, y: -30, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 });
      gsap.to(orbPurpleRef.current, { x: 40,  y: -50, duration: 7,  repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

      /* ── CONTINUOUS: "LOADING" border pulse ── */
      gsap.to(loadingRef.current, {
        boxShadow: "0 0 18px 4px #00e676",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ── CONTINUOUS: word-one color breathe ── */
      gsap.to(".word-one", {
        color: "#FF9500",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ── CONTINUOUS: guitar spin nudge ── */
      gsap.to(guitarRef.current, {
        rotation: "+=15",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      /* ── CONTINUOUS: rocket tilt ── */
      gsap.to(rocketRef.current, {
        rotation: "+=20",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      /* ── CONTINUOUS: star pulse scale ── */
      gsap.to(starRef.current, {
        scale: 1.5,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ── CONTINUOUS: zap flicker opacity ── */
      gsap.to(zapRef.current, {
        opacity: 0.3,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor"          ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />

      <div className="landing-wrapper" ref={wrapperRef}>

        {/* Background orbs */}
        <div className="orb orb-orange" ref={orbOrangeRef} />
        <div className="orb orb-pink"   ref={orbPinkRef}   />
        <div className="orb orb-purple" ref={orbPurpleRef} />

        {/* ── Sticker badges ── */}
        <div className="sticker sticker-chaos" ref={chaosRef}>
          CHAOS MODE <span className="bolt">⚡</span>
        </div>
        <div className="sticker sticker-horn"    ref={hornRef}>HORN OK PLEASE</div>
        <div className="sticker sticker-loading" ref={loadingRef}>LOADING…</div>

        {/* ── Floating emoji icons ── */}
        <span className="emoji emoji-rocket" ref={rocketRef}>🚀</span>
        <span className="emoji emoji-guitar" ref={guitarRef}>🎸</span>
        <span className="emoji emoji-bulb"   ref={bulbRef}>💡</span>
        <span className="emoji emoji-coffee" ref={coffeeRef}>☕</span>
        <span className="emoji emoji-globe"  ref={globeRef}>🌐</span>
        <span className="emoji emoji-star"   ref={starRef}>✨</span>
        <span className="emoji emoji-fire"   ref={fireRef}>🔥</span>
        <span className="emoji emoji-zap"    ref={zapRef}>⚡</span>

        {/* ── Hero content ── */}
        <div className="hero-content">
          <span className="hero-line-1" ref={line1Ref}>Three Eras.</span>

          <span className="hero-line-2" ref={line2Ref}>
            <span className="word-one">One&nbsp;</span>
            <span className="word-campus">event<span className="word-dot">.</span></span>
          </span>

          <span className="hero-line-3" ref={line3Ref}>
            <span className="word-campus">Trivera<span className="word-dot">.</span></span>
          </span>

          <p className="hero-subtext" ref={subtextRef}>
            Where entrepreneurship meets culture and the campus comes alive.
          </p>

          <div className="cta-group" ref={ctaRef}>
            <button className="btn-register">Register Now</button>
            <button className="btn-explore">Explore Events</button>
          </div>
        </div>
      </div>
    </>
  );
}