import React from 'react';
import SectionTitle from './SectionTitle';
import GoldTrophy from '../images/trophy-front-premium.svg';
import GoldTitle from '../images/GOLD.svg';
import SilverTrophy from '../images/trophy-front-color.svg';
import SilverTitle from '../images/Silver.svg';
import Button from './Button';
import Crown from '../images/crow-dynamic-color.svg';
import StarForward from '../images/star-forward.svg';
import StarForwardBlur from '../images/star-forward-blur.svg';
import StarBackward from '../images/star-backward.svg';
import StarBackwardBlur from '../images/star-backward-blur.svg';
import Camera from '../images/camera-dynamic-color.svg';
import Thumb from '../images/thumb-up-dynamic-color.svg';

function TropyCard({ icon, titleIcon, subTitle }) {
  return (
    <div className="grid gap-12 place-items-center">
      <div>
        <img src={icon} />
      </div>
      <div className="grid grid-rows-2 gap-2 place-items-center">
        <div>
          <img src={titleIcon} />
        </div>
        <span className="font-urbanist text-dark-brown font-extrabold text-4xl text-center">
          {subTitle}
        </span>
      </div>
    </div>
  );
}

function Achievements() {
  const trophies = [
    {
      icon: GoldTrophy,
      titleIcon: GoldTitle,
      subTitle: 'Media Award 2023',
    },
    {
      icon: SilverTrophy,
      titleIcon: SilverTitle,
      subTitle: 'Branding Award 2022',
    },
  ];
  return (
    <section id="achievements" className="bg-white px-8 pb-16 pt-24">
      <div className="container mx-auto grid gap-y-36 place-items-center relative">
        <div className="absolute hidden lg:block lg:-left-20 lg:-top-10 xl:left-0 xl:-top-10">
          <img src={StarForward} />
        </div>
        <div className="absolute xl:left-40 xl:top-10 hidden lg:block lg:left-20 lg:top-10">
          <img src={StarBackwardBlur} />
        </div>
        <div className="absolute xl:right-40 xl:top-10 hidden lg:block lg:right-20 lg:top-10">
          <img src={StarBackward} />
        </div>
        <div className="absolute xl:right-0 xl:top-24 hidden lg:block lg:top-28 lg:-right-10">
          <img src={StarForwardBlur} />
        </div>
        <div className="relative">
          <SectionTitle
            title="Achievements"
            color="orange"
            borderColor="#F75603"
            borderGapColor="#fff"
          />
          <div className="absolute -top-[3.3rem] -left-10">
            <img src={Crown} />
          </div>
        </div>
        <div className="absolute xl:right-16 xl:top-48 hidden xl:block">
          <img src={Camera} />
        </div>
        <div className="grid place-items-center lg:grid-cols-2 gap-32 relative">
          <img
            src={Thumb}
            className="absolute lg:-left-40 lg:-bottom-32 hidden lg:block"
          />
          {trophies.map(({ icon, titleIcon, subTitle }, i) => (
            <TropyCard
              key={i}
              icon={icon}
              titleIcon={titleIcon}
              subTitle={subTitle}
            />
          ))}
        </div>
        <Button>Explore all Achiements</Button>
      </div>
    </section>
  );
}

export default Achievements;
