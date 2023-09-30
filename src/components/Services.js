import React from 'react';
import Button from './Button';
import Target from '../images/target-dynamic-gradient.svg';
import ThumbsUp from '../images/thumb-up-dynamic-gradient.svg';
import Wifi from '../images/wifi-dynamic-gradient.svg';
import Speaker from '../images/megaphone-dynamic-gradient.svg';
import Paint from '../images/bucket-dynamic-gradient.svg';
import Mic from '../images/mic-dynamic-gradient.svg';
import SectionTitle from './SectionTitle';

function ServiceCard({ title, body }) {
  return (
    <div className="bg-creamy py-16 px-10 flex flex-col gap-7 justify-center rounded-3xl items-center col-span-2 text-center">
      <span className="font-phudu text-5xl text-zeus uppercase">{title}</span>
      <span className="text-center font-urbanist text-4xl font-normal">
        {body}
      </span>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: 'BRAND BOOSt',
      body: 'Elevate your brand identity to its full potential by harnessing the true power of branding.',
    },
    {
      title: 'WEB Craft',
      body: 'Transforming visions into compelling websites. Our design expertise, your online success.',
    },
    {
      title: 'DIGI Marketing',
      body: 'We tailor strategies for growth, from SEO to social media, driving results and ROI.',
    },
    {
      title: 'PR BAAP',
      body: 'We craft compelling stories and strategies that drive influence and boost your reputation',
    },
  ];
  return (
    <section
      id="services"
      className=" bg-yellow px-8 pt-16 lg:pb-40 pb-16 relative"
    >
      <div className="absolute -top-14 lg:right-40 left-3/4">
        <img src={Target} />
      </div>
      <div className="absolute top-28 right-0 hidden md:block">
        <img src={Wifi} />
      </div>
      <div className="absolute -bottom-0 left-0 hidden md:block">
        <img src={Paint} />
      </div>
      <div className="grid gap-14 place-items-center container mx-auto relative">
        <div className="absolute -top-8 left-0 hidden md:block">
          <img src={Speaker} />
        </div>
        <div className="absolute -bottom-32 right-[10%] hidden lg:block">
          <img src={ThumbsUp} />
        </div>
        <SectionTitle
          title="Services"
          color="orange"
          borderColor="#F75603"
          borderGapColor="#FFCC01"
        />
        <div className="grid lg:grid-cols-4 gap-7 mt-8">
          {services.map(({ title, body }, i) => (
            <ServiceCard key={i} title={title} body={body} />
          ))}
        </div>
        <div className="relative">
          <Button>Explore All Services</Button>
          <div className="absolute -left-40 -bottom-24 hidden lg:block">
            <img src={Mic} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
