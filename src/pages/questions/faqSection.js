import { Breakpoint, BreakpointProvider } from "react-socks";
import StickyScroll2 from "./mobile/faq-mobile";
import StickyScroll from "./faq";


const FaqPage = () => {
    
  const content = [
      {
          title: "What is Ted and what is Tedx?",
          description:
              "TEDx is a program created by TED (Technology, Entertainment, Design), a global platform known for its conferences featuring influential speakers and thought leaders. TEDx events are independently organized, community-driven gatherings licensed by TED. ",
      },
      {
          title: "What is the Theme of the event?",
          description:
              "The theme of TEDxDAVV is The Within. It delves into the essence of our inner soul, exploring the profound depths of self-awareness, personal growth, and the untapped potential that resides within each of us. This theme invites speakers and attendees to reflect on their internal journeys, discover hidden truths, and embrace the power of introspection to drive meaningful change in the world.",
      },
      {
          title: "What is the date and time of the Event?",
          description:
              "The TEDxDAVV event is scheduled for March 28th for the Cultural Fest and March 29th for the Speaker Session. Mark your calendars for an inspiring and exciting experience!",
      },
      {
          title: "What language is spoken at the event?",
          description:
              "The languages spoken during the event are Hindi and English.",
      },
      {
          title: "What is the price of tickets?",
          description:
              "The ticket prices for TEDxDAVV are ₹299 for General, ₹449 for Balcony, ₹799 for VIP, and ₹1199 for VVIP. Grab your tickets and be part of an unforgettable experience!",
      },
      {
          title: "What documents do I need to carry on the event day?",
          description:
              "Please bring a valid ID and your ticket (if purchased online) for smooth entry and verification.",
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
