import React from 'react';
import "./Buy.css";
import buytick from "../Assests/Images/ticket-svgrepo-com.svg";

const Buy = () => {
  return (
    <div className='buy'>
      <a href='https://www.district.in/tedxdavv-mar28-2025/event' target='_blank'><p className='buynowbut'>
        <img loading="lazy" className="buyimg" src={buytick} alt='' />
      </p> </a>
    </div>
  );
};

export default Buy;
