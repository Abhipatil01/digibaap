import React from 'react';
import SectionTitle from './SectionTitle';
import WhatsApp from '../images/WhatsApp.svg';
import WhatsAppHover from '../images/WhatsApp-hover.svg';
import LinkedIn from '../images/LinkedIn.svg';
import LinkedInHover from '../images/LinkedIn-hover.svg';
import Insta from '../images/Insta.svg';
import InstaHover from '../images/Insta-hover.svg';
import Facebook from '../images/Facebook.svg';
import FacebookHover from '../images/Facebook-hover.svg';
import Youtube from '../images/Youtube.svg';
import YoutubeHover from '../images/Youtube-hover.svg';
import Notify from '../images/notify-heart-front-color.svg';
import Phone from '../images/phone-ringing-front-color.svg';

function InputField({ label, placeholder, name, required, type = 'text' }) {
  return (
    <div className="grid gap-4">
      <label
        for={name}
        class="text-5xl font-medium text-white font-urbanist flex gap-3"
      >
        <span>{label}</span>
        <span>{required ? '*' : ''}</span>
      </label>
      <input
        type={type}
        id={name}
        class="bg-white border border-white text-brown text-2xl rounded-full block w-full p-2.5 h-14"
        placeholder={placeholder}
      />
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const [whatsappHover, setWhatsappHover] = React.useState(false);
  const [instaHover, setinstaHover] = React.useState(false);
  const [youtubeappHover, setyoutubeappHover] = React.useState(false);
  const [linkedinHover, setlinkedinHover] = React.useState(false);
  const [facebbokHover, setfacebbokHover] = React.useState(false);
  return (
    <footer
      id="project-in-mind"
      className="bg-gradient-to-t from-orange to-dark-orange px-8 pb-16 pt-32 relative"
    >
      <div className="absolute xl:-top-24 xl:right-40 -top-16 right-0">
        <img src={Phone} className="h-48 xl:h-auto" />
      </div>
      <div className="container mx-auto grid">
        <SectionTitle
          title="Have Project In Mind"
          color="yellow"
          borderColor="#FFCC01"
          borderGapColor="#F75603"
          textAlign="left"
        />
        <div className="grid xl:grid-cols-2 gap-12 mt-16">
          <div className="grid gap-6 lg:w-4/5">
            <InputField name="your_name" label="Your Name" required />
            <InputField name="organization_name" label="Organization Name" />
            <InputField name="email" label="Email" required />
            <InputField name="phone" label="Phone" required />
            <button className="font-phudu text-5xl text-white border-solid border border-white rounded-3xl py-4 px-12 h-20 text-center hover:text-orange hover:bg-white w-4/5">
              Call me back
            </button>
            <div className="flex flex-col gap-6 xl:pb-20">
              <span className="font-urbanist text-4xl font-medium text-white">
                OR
              </span>
              <button
                className="flex gap-4 items-center hover:text-yellow text-white"
                onMouseEnter={() => {
                  setWhatsappHover(true);
                }}
                onMouseLeave={() => {
                  setWhatsappHover(false);
                }}
              >
                <img
                  src={whatsappHover ? WhatsAppHover : WhatsApp}
                  alt="whatsapp"
                  className="bg-inherit"
                />
                <span className="text-inherit font-phudu text-5xl">
                  CONNECT ON WHATSAPP
                </span>
              </button>
            </div>
          </div>
          <div className="xl:mt-12 grid">
            <div className="grid gap-36">
              <div className="grid gap-24">
                <div className="grid grid-rows-2 gap-8">
                  <div className="font-phudu text-8xl text-yellow">
                    +91 12340 45689
                  </div>
                  <div className="font-urbanist text-yellow font-bold text-4xl">
                    201, 2nd Floor, Business Park Tower M. C. Road, Andheri
                    East, Mumbai 4000070
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="font-urbanist text-yellow font-normal text-3xl">
                    WORKING HOURS
                  </div>
                  <div className="flex flex-col">
                    <div className="font-urbanist text-yellow font-bold text-4xl">
                      Monday to Friday
                    </div>
                    <div className="font-urbanist text-yellow font-bold text-4xl">
                      10:00AM to 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-10">
                <div className="grid gap-10">
                  <div className="flex gap-6">
                    <button
                      onMouseEnter={() => {
                        setlinkedinHover(true);
                      }}
                      onMouseLeave={() => {
                        setlinkedinHover(false);
                      }}
                    >
                      <img
                        src={linkedinHover ? LinkedInHover : LinkedIn}
                        alt="linkedin"
                      />
                    </button>
                    <button
                      onMouseEnter={() => {
                        setinstaHover(true);
                      }}
                      onMouseLeave={() => {
                        setinstaHover(false);
                      }}
                    >
                      <img
                        src={instaHover ? InstaHover : Insta}
                        alt="instagram"
                      />
                    </button>
                    <button
                      onMouseEnter={() => {
                        setfacebbokHover(true);
                      }}
                      onMouseLeave={() => {
                        setfacebbokHover(false);
                      }}
                    >
                      <img
                        src={facebbokHover ? FacebookHover : Facebook}
                        alt="facebook"
                      />
                    </button>
                    <button
                      onMouseEnter={() => {
                        setyoutubeappHover(true);
                      }}
                      onMouseLeave={() => {
                        setyoutubeappHover(false);
                      }}
                    >
                      <img
                        src={youtubeappHover ? YoutubeHover : Youtube}
                        alt="youtube"
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <span className="font-phudu text-yellow text-8xl">
                    CRAFTED WITH
                  </span>
                  <div className="flex">
                    <img src={Notify} />
                    <span className="font-phudu text-yellow text-8xl">
                      IN MUMBAI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-urbanist font-normal text-yellow mt-3 md:mt-0">
          ©{currentYear} - Copyrights Reserved DigiBaapp
        </div>
      </div>
    </footer>
  );
}

export default Footer;
