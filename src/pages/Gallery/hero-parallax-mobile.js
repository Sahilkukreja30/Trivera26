"use client";
import React , {useState,useEffect} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import gsap from "gsap";
import stickerImg from "../../Images/12.png"; 


export const HeroParallax2 = ({ products }) => {
  const firstRow = products.slice(0,5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const fourthRow = products.slice(15,20);
  const fifthRow = products.slice(20,25);
  const sixthRow = products.slice(25,30);
  const [height, setHeight] = useState("290vh");
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 150, bounce: 1 };

  

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 1200]),
    springConfig
  );
  const translateX6 = useSpring(
    useTransform(scrollYProgress, [0, 1], [2000, -100]),
    springConfig
  );
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth === 375) {
        setHeight("320vh");

      }
      else if(window.innerWidth < 375){
        setHeight("300vh")
      } 
      else if(window.innerWidth>400) {
        setHeight("285vh");
      }
      else{
        setHeight("275vh")
      }
    };

    updateHeight(); // Set height initially
    window.addEventListener("resize", updateHeight); // Listen for screen resize

    return () => {
      window.removeEventListener("resize", updateHeight); // Cleanup listener
    };
  }, []);

  const translateXThird = useSpring(
    useTransform(scrollYProgress, [0, 1], [-530, 250]),
    springConfig
  );
  const translateXFIFTH = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1230, 250]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, -1800]),
    springConfig
  );
  const translateXReverseFourth = useSpring(
    useTransform(scrollYProgress, [0, 1], [700, -1300]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [35, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0], [0.1, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-800, -200]),
    springConfig
  );
  
 


  return (
    <div
      ref={ref}
      style={{ height, backgroundColor: "#2d2884" }}
      className="py-40 overflow-hidden antialiased relative flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <img 
        src={stickerImg} 
        alt="sticker"
        style={{
          position: "absolute",
          top: "20px",
          right: "0px",
          width: "120px",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
      <Header />
      <div className="absolute z-10">
        <motion.div
          style={{ rotateX, rotateZ, translateY, opacity }}
        >
          <motion.div className="FIRST flex flex-row-reverse -translate-y-3 mt-[95vh] w-screen space-x-reverse space-x-5">
            {firstRow.map((product) => (
              <ProductCard product={product} translate={translateX} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="SECOND flex translate-y-3 flex-row space-x-5">
            {secondRow.map((product) => (
              <ProductCardLandscape product={product} translate={translateXReverse} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="THIRD flex -translate-x-80 -translate-y-4 flex-row-reverse space-x-reverse space-x-5">
            {thirdRow.map((product) => (
              <ProductCard product={product} translate={translateXThird} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="FOURTH flex translate-y-5 flex-row space-x-5">
            {fourthRow.map((product) => (
              <ProductCardLandscape product={product} translate={translateXReverseFourth} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="FIFTH flex -translate-x-80 -translate-y-6 flex-row-reverse space-x-reverse space-x-5">
            {fifthRow.map((product) => (
              <ProductCard product={product} translate={translateXFIFTH} key={product.title} />
            ))}
          </motion.div>
          <motion.div className="FIFTH flex -translate-x-80 -translate-y-14 flex-row-reverse space-x-reverse space-x-5">
            {sixthRow.map((product) => (
              <ProductCard product={product} translate={translateX6} key={product.title} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroParallax2;

export const Header = () => {
  useEffect(() => {
    gsap.fromTo('.glimpse-word', {
      y: 140,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: { each: 0.1 },
      delay: 0.05,
      duration: 1.5,
      ease: "elastic.out(1,0.9)",
    });
  }, []);

  return (
    <div style={{ position: "absolute", top: "40vh", left: "10px", zIndex: 100000 }}>
      <h1 style={{ 
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "900",
        display: "flex",
        flexDirection: "column", 
        fontSize: "36px"
      }}>
        <div style={{ display: "flex", flexDirection: "row"}}>
          {'PAST'.split('').map((char, index) => (
            <div key={index} className='glimpse-word' style={{ color: "#A5D761" }}>
              {char}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {'GLIMPSES'.split('').map((char, index) => (
            <div key={index} className='glimpse-word' style={{ color: "#ffffff" }}>
              {char}
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          scale:1.02,
        }}
        key={product.title}
        className="group/product opacity-100 mt-20 h-60 w-40 relative flex-shrink-0"
      >
        <a
          href='javascript:void(0)'
          className="block opacity-100 group-hover/product:shadow-2xl"
        >
          <img loading="lazy"
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover  opacity-100 rounded-xl absolute h-full w-full  inset-0" // Change opacity here
            alt={product.title}
          />
        </a>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-50 bg-black pointer-events-none"></div> // Change opacity here
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };
  

  export const ProductCardLandscape = ({ product, translate }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product opacity-100 h-40 w-60 relative flex-shrink-0"
      >
        <a
          href='javascript:void(0)'
          className="block opacity-100 group-hover/product:shadow-2xl"
        >
          <img loading="lazy"
            src={product.thumbnail}
            height="400"
            width="700"
            className="object-cover object-left-top opacity-100 rounded-xl absolute h-full w-full  inset-0" // Change opacity here
            alt={product.title}
          />
        </a>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-50 bg-black pointer-events-none"></div> // Change opacity here
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };
  