import React from 'react';
import Right from '../images/expand_circle_right.svg';
import Left from '../images/expand_circle_left.svg';
import BackgroundVideo from '../assets/videos/background.mp4';

function Home() {
  return (
    <section className="h-screen w-full gap-3 relative" id="home">
      <div className="absolute top-0 left-0 h-full w-full -z-10 overflow-hidden">
        <video autoPlay loop muted className="h-full w-full object-fill">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>

      <div className="flex align-middle justify-center h-full w-full container mx-auto relative">
        <img
          src={Left}
          className="cursor-pointer absolute left-0 lg:top-1/2 ml-8 bottom-0"
        />
        <div className="flex flex-col	justify-center align-middle gap-3">
          <span className="font-phudu font-extrabold text-8xl text-center">
            Elevate, Engage, Evolve
          </span>
          <span className="font-urbanist text-8xl font-normal text-center">
            The Digital Trinity
          </span>
        </div>
        <img
          src={Right}
          className="cursor-pointer absolute right-0 lg:top-1/2 bottom-0 mr-8"
        />
      </div>
    </section>
  );
}

export default Home;
