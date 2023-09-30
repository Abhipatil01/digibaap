import React from 'react';
import SectionTitle from './SectionTitle';

function TrustUs() {
  const kpis = [
    { num: '120+', name: 'Project Delivered' },
    { num: '90+', name: 'Trusted Clients' },
    { num: '11', name: 'Served Countries' },
    { num: '15+', name: 'Year of experience' },
  ];
  return (
    <section
      id="they-trust-us"
      className="bg-gradient-to-t from-dark-orange to-orange py-14"
    >
      <div className="grid place-items-center container mx-auto gap-14">
        <SectionTitle
          title="THEY TRUST US"
          color="white"
          borderColor="#fff"
          borderGapColor="#F75603"
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-28">
          {kpis.map(({ num, name }, i) => (
            <div key={i} className="grid grid-rows-2">
              <span
                className="font-phudu text-8xl text-white text-center"
                style={{
                  textShadow: '2px 2px #F75603, 3px 3px #fff',
                }}
              >
                {num}
              </span>
              <span className="font-urbanist text-3xl font-bold text-white text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustUs;
