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
import SquareImage from './SquareImage';

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
            <SquareImage alt="client" src={Client1} />
            <SquareImage alt="client" src={Client2} />
            <SquareImage alt="client" src={Client3} />
            <SquareImage alt="client" src={Client4} />
            <SquareImage alt="client" src={Client5} />
            <SquareImage alt="client" src={Client6} />
          </div>
          <div className="grid gap-x-10 lg:grid-cols-5 md:grid-cols-3 place-content-baseline place-items-center grid-cols-2">
            <SquareImage alt="client" src={Client7} />
            <SquareImage alt="client" src={Client8} />
            <SquareImage alt="client" src={Client9} />
            <SquareImage alt="client" src={Client10} />
            <SquareImage alt="client" src={Client11} />
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
