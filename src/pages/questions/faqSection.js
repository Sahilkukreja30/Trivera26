import { Breakpoint, BreakpointProvider } from "react-socks";
import StickyScroll2 from "./mobile/faq-mobile";
import StickyScroll from "./faq";


const FaqPage = () => {
    
  const content = [
      {
    title: "What is Trivera?",
    description:
      "Trivera is a dynamic college fest that brings together multiple forms of entertainment, creativity, and cultural expression. It is designed around three distinct eras, offering participants a unique and immersive experience through diverse events and activities.",
  },
  {
    title: "What is the theme of the event?",
    description:
      "The theme of Trivera revolves around three eras—Past, Present, and Future—each representing different styles, cultures, and innovations. It encourages participants to explore, express, and compete across timelines.",
  },
  {
    title: "What is the date and time of the event?",
    description:
      "Trivera will take place over multiple days, featuring different events scheduled throughout. Stay tuned to the official schedule for exact timings of each activity.",
  },
  {
    title: "What events are included in Trivera?",
    description:
      "Trivera includes a variety of events such as stand-up comedy, sufi night, DJ night, gaming competitions, flea market, and interactive challenges across all three eras.",
  },
  {
    title: "What language will be used during the event?",
    description:
      "The primary languages used during Trivera are Hindi and English to ensure inclusivity and engagement for all participants.",
  },
  {
    title: "What are the ticket prices?",
    description:
      "Ticket pricing varies depending on access levels and events. Different categories may include General, VIP, and special passes. Check the official platform for updated pricing details.",
  },
  {
    title: "Who can participate in Trivera?",
    description:
      "Trivera is open to college students and invited participants. Some events may allow external entries depending on the guidelines.",
  },
  {
    title: "What should I carry on the event day?",
    description:
      "Participants should carry a valid ID and their event pass or ticket for verification and smooth entry.",
  },
  ];

  
  return (
    <BreakpointProvider>
        <Breakpoint customQuery="(max-width: 1025px)">
            <StickyScroll2 content={content}/>
        </Breakpoint>
        <Breakpoint customQuery="(min-width: 1025px)">
            <StickyScroll content={content}/>
        </Breakpoint>
    </BreakpointProvider>

      );
};

export default FaqPage;
