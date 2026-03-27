import './SideMarquee.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import cameraSticker from '../../Images/60.png';


gsap.registerPlugin(ScrollTrigger);

const SideMarquee = (props) => {
    const stickerRef = useRef(null);
    const containerRef = useRef(null);
    let isRight = props.isRight;

    useEffect(() => {
        if (stickerRef.current) {

            // Show/hide based on About section visibility
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => gsap.set(stickerRef.current, { autoAlpha: 1 }),
                onLeave: () => gsap.set(stickerRef.current, { autoAlpha: 0 }),
                onEnterBack: () => gsap.set(stickerRef.current, { autoAlpha: 1 }),
                onLeaveBack: () => gsap.set(stickerRef.current, { autoAlpha: 0 }),
            });

            // Scroll animation
            gsap.fromTo(stickerRef.current,
    { y: 0, rotate: 0, scale: 0.85 },
    {
        y: () => containerRef.current.offsetHeight * 0.3,
        rotate: 0,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
            trigger: containerRef.current,  // back to containerRef
            start: 'top top',
            end: 'bottom bottom',
            scrub: 15,
        }
    }
);

            // Wobble
            gsap.to(stickerRef.current, {
                rotate: '+=3',
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }
    }, []);

    return (
        <>
            {/* The line */}
            <div ref={containerRef} style={{
                height: isRight ? `400dvh` : '6000px',
            }}
            className={`w-[1px] SideMarqueeContainer invisible lg:visible ${isRight ? 'right-6 absolute top-0' : 'left-14 absolute'} z-50 bg-slate-200`} />

            {/* Sticker */}
            <img
                ref={stickerRef}
                src={cameraSticker}
                alt="camera sticker"
                className="side-marquee-sticker invisible lg:visible"
            />
        </>
    );
};

export default SideMarquee;