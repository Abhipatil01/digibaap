import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Crown from '../images/crow-dynamic-color.svg';
import StarForward from '../images/star-forward.svg';
import StarForwardBlur from '../images/star-forward-blur.svg';
import StarBackward from '../images/star-backward.svg';
import StarBackwardBlur from '../images/star-backward-blur.svg';
import Camera from '../images/camera-dynamic-color.svg';
import Thumb from '../images/thumb-up-dynamic-color.svg';
import { StaticImage } from 'gatsby-plugin-image';

function Achievements() {
  return (
    <section id="achievements" className="bg-white px-8 pb-16 pt-24">
      <div className="container mx-auto grid gap-y-36 place-items-center relative">
        <div className="absolute hidden lg:block lg:-left-20 lg:-top-10 xl:left-0 xl:-top-10">
          <img src={StarForward} alt="star-forward" />
        </div>
        <div className="absolute xl:left-40 xl:top-10 hidden lg:block lg:left-20 lg:top-10">
          <img src={StarBackwardBlur} alt="star-backward-blur" />
        </div>
        <div className="absolute xl:right-40 xl:top-10 hidden lg:block lg:right-20 lg:top-10">
          <img src={StarBackward} alt="star-backward" />
        </div>
        <div className="absolute xl:right-0 xl:top-24 hidden lg:block lg:top-28 lg:-right-10">
          <img src={StarForwardBlur} alt="star-forward-blur" />
        </div>
        <div className="relative">
          <SectionTitle
            title="Achievements"
            color="orange"
            borderColor="#F75603"
            borderGapColor="#fff"
          />
          <div className="absolute md:-top-[3.3rem] md:-left-10 -top-[3.6rem] -left-[2.9rem]">
            <img
              src={Crown}
              className="h-24 w-24 md:h-auto md:w-auto"
              alt="crown"
            />
          </div>
        </div>
        <div className="absolute xl:right-16 xl:top-48 hidden xl:block">
          <img src={Camera} alt="camera" />
        </div>
        <div className="grid place-items-center lg:grid-cols-2 gap-32 relative">
          <img
            alt="thumb"
            src={Thumb}
            className="absolute lg:-left-40 lg:-bottom-32 hidden lg:block"
          />
          <div className="grid gap-12 place-items-center">
            <div>
              <StaticImage
                src="../images/trophy-front-premium.svg"
                alt="trophy"
                placeholder="tracedSVG"
              />
            </div>
            <div className="grid grid-rows-2 gap-2 place-items-center">
              <div>
                <StaticImage
                  src="../images/GOLD.svg"
                  alt="trphy-title"
                  placeholder="tracedSVG"
                />
              </div>
              <span className="font-urbanist text-dark-brown font-extrabold text-4xl text-center">
                Media Award 2023
              </span>
            </div>
          </div>
          <div className="grid gap-12 place-items-center">
            <div>
              <StaticImage
                src="../images/trophy-front-color.svg"
                alt="trophy"
                placeholder="tracedSVG"
              />
            </div>
            <div className="grid grid-rows-2 gap-2 place-items-center">
              <div>
                <StaticImage
                  src="../images/Silver.svg"
                  alt="trphy-title"
                  placeholder="tracedSVG"
                />
              </div>
              <span className="font-urbanist text-dark-brown font-extrabold text-4xl text-center">
                Branding Award 2022
              </span>
            </div>
          </div>
        </div>
        <Button>Explore all Achiements</Button>
      </div>
    </section>
  );
}

export default Achievements;
