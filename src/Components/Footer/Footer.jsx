import React, { useState } from 'react';


import './Footer.css'
//import { Link } from 'react-router-dom';






export default function Footer() {

  const [mail, setMail] = useState({
    gmail: ''
  });

  const handleInput = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/store-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: mail.gmail }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Email stored successfully');
        // Optionally, you can reset the input field after successful submission
        setMail({ gmail: '' });
      } else {
        console.error('Failed to store email');
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };




  return (
    <div className='footer' id='footer'>
      <div className='fcontainer'>
        <div className='fcontent'>
          <div className='footerlinks'>
            <h4 className='redtext'>GET IN TOUCH</h4>
            <p >Utkarsh Pratap Bundela: <a href="tel:+91 6394218608" style={{color:"#ffffff"}}> +91 6394218608</a> <br />
              E-mail: &nbsp;
              <a href="mailto:trivera.davv@gmail.com" style={{color:"#ffffff"}}>
               trivera.davv@gmail.com
              </a>
            </p>
            <h4 className='redtext'>GET UPDATED</h4>
            <div className='socialmedia'>
              <a href="https://www.instagram.com/trivera.davv/" target='_blank' rel="noreferrer">
                <img loading="lazy" alt="Instagram " style={{ width: '48px', height: '48px' }} fetchpriority="high" src="https://static.wixstatic.com/media/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png" />
              </a>
              <a href="https://unstop.com/o/uFI0PUK?lb=4VEA4Ye6&utm_medium=Share&utm_source=fdzxysut15930&utm_campaign=Events" target='_blank' rel="noreferrer"><img loading="lazy" alt="unstop" style={{ width: '64px', height: '64px' }} fetchpriority="high" src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" /></a>
              {/* <a href="https://facebook.com/tedxdavv" target='_blank' rel="noreferrer"><img loading="lazy" alt="Facebook" style={{ width: '34px', height: '34px' }} fetchpriority="high" src="https://static.wixstatic.com/media/11062b_ef6a6ac194704911951645990055c2ce~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ef6a6ac194704911951645990055c2ce~mv2.png" /></a>
              <a href="https://twitter.com/tedxdavv" target='_blank' rel="noreferrer"><img loading="lazy" alt="Twitter" style={{ width: '34px', height: '34px' }} fetchpriority="high" src="https://static.wixstatic.com/media/11062b_8616df6eb29e41d9a61d3677e7ace261~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_8616df6eb29e41d9a61d3677e7ace261~mv2.png" /></a> */}
            </div>


          </div>
          <div className='footerlinks'>
            <h4 className='button blacktext'><a className='contact-g' href="mailto:trivera.davv@gmail.com">PARTNER WITH US</a> </h4>
              
               
          </div>
          <div className='footerlinks'>
            <p>
              Be the first to hear about our upcoming events  and ideas<br/> worth sharing. Sign Up. <br />
              <div className='mailus'>
              <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='gmail'
          className='redtext'
          placeholder='enter your email'
          required='required'
          value={mail.gmail}
          onChange={handleInput}
        />
        <button onClick={() => alert("you have registered for updates")} type='submit' className='button'>
          Submit
        </button>
      </form>
              </div>
            </p>
          </div>
        </div>
        <div className='copyright'>
          <p>© Copyright by Trivera.davv. This is independent trivera.davv events All Rights Reserved. &nbsp;
            <span className='privacy redtext'>
              <a href='/privacy'>Privacy Statement</a>
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}