import React from 'react';
import Button from './Button';
import SectionTitle from './SectionTitle';
import Industry1 from '../images/industry1.svg';
import Industry2 from '../images/industry2.svg';
import Industry4 from '../images/industry4.svg';
import Industry5 from '../images/industry5.svg';
import Industry3 from '../images/industry3.svg';
import Industry6 from '../images/industry6.svg';
import Industry7 from '../images/industry7.svg';
import Industry8 from '../images/industry8.svg';
import Industry9 from '../images/industry9.svg';
import Industry10 from '../images/industry10.svg';
import Industry11 from '../images/industry11.svg';
import Industry12 from '../images/industry12.svg';
import SquareImage from './SquareImage';

function Industry({ name, icon }) {
  return (
    <div className="grid grid-rows-2 gap-8 col-span-2 place-items-center flex-col p-8 bottom-2 border-light-brown border first:border-x-0 first:border-t-0 last:border-r-0 last:border-b-0">
      <div>
        <SquareImage src={icon} alt={`industry-${name}`} />
      </div>
      <span className="font-urbanist text-2xl text-yellow font-extrabold text-center">
        {name}
      </span>
    </div>
  );
}

function Industries() {
  const industriesList = [
    { name: 'Health Care and Fitness', icon: Industry1 },
    { name: 'Beauty and Skin Care', icon: Industry2 },
    { name: 'Real Estate', icon: Industry3 },
    { name: 'Restaurant / Hotels', icon: Industry4 },
    { name: 'Education', icon: Industry5 },
    { name: 'Lifestyle and Entertainment', icon: Industry6 },
    { name: 'B2B Enterprises', icon: Industry7 },
    { name: 'Personalities', icon: Industry8 },
    { name: 'Travel and Hospitalities', icon: Industry9 },
    { name: 'Logistics', icon: Industry10 },
    { name: 'Interior and Architect', icon: Industry11 },
    { name: 'Manufacturing', icon: Industry12 },
  ];
  return (
    <section id="industries" className="bg-brown px-20 py-16">
      <div className="grid gap-y-20 container mx-auto place-items-center">
        <SectionTitle
          title="Industries we serve"
          color="orange"
          borderColor="#F75603"
          borderGapColor="#4E240E"
        />
        <div
          className="grid grid-cols-4 xl:grid-cols-12 md:grid-cols-6 border-2 border-light-brown rounded-3xl 
          [&>*:nth-child(6)]:border-r-0 [&>*:nth-child(6)]:border-t-0 
          [&>*:nth-child(7)]:border-l-0 [&>*:nth-child(7)]:border-b-0 
          [&>*:nth-child(3)]:border-r-0 [&>*:nth-child(3)]:border-t-0 
          [&>*:nth-child(10)]:border-l-0 [&>*:nth-child(10)]:border-b-0 
          [&>*:nth-child(12)]:border-l-0
        [&>*:nth-child(2)]:border-r-0 [&>*:nth-child(2)]:border-t-0
        [&>*:nth-child(11)]:border-l-0 [&>*:nth-child(11)]:border-b-0
        "
        >
          {industriesList.map(({ icon, name }, i) => (
            <Industry icon={icon} name={name} />
          ))}
        </div>
        <div>
          <Button>Explore All Industries</Button>
        </div>
      </div>
    </section>
  );
}

export default Industries;
