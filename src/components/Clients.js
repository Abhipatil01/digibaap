import React from 'react';
import Button from './Button';
import Client1 from '../images/client1.svg';
import Client2 from '../images/client2.svg';
import Client3 from '../images/client3.svg';
import Client4 from '../images/client4.svg';
import Client5 from '../images/client5.svg';
import Client6 from '../images/client6.svg';
import Client7 from '../images/client7.svg';
import Client8 from '../images/client8.svg';
import Client9 from '../images/client9.svg';
import Client10 from '../images/client10.svg';
import Client11 from '../images/client11.svg';
import SectionTitle from './SectionTitle';

function Img(props) {
  return <img className="w-full aspect-square object-contain" {...props} />;
}

function Clients() {
  return (
    <section id="clients" className="bg-white place-items-center py-14 px-8">
      <div className="container mx-auto grid gap-y-9 place-items-center">
        <SectionTitle
          title="Clients"
          color="orange"
          borderColor="#F75603"
          borderGapColor="#ffffff"
        />
        <div>
          <div className="grid gap-x-10 lg:grid-cols-6 md:grid-cols-3 place-content-baseline place-items-center grid-cols-2">
            <Img src={Client1} />
            <Img src={Client2} />
            <Img src={Client3} />
            <Img src={Client4} />
            <Img src={Client5} />
            <Img src={Client6} />
          </div>
          <div className="grid gap-x-10 lg:grid-cols-5 md:grid-cols-3 place-content-baseline place-items-center grid-cols-2">
            <Img src={Client7} />
            <Img src={Client8} />
            <Img src={Client9} />
            <Img src={Client10} />
            <Img src={Client11} />
          </div>
        </div>
        <div>
          <Button>View all Clients</Button>
        </div>
      </div>
    </section>
  );
}

export default Clients;
