import * as React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Work from '../components/Work';
import TrustUs from '../components/TrustUs';
import Clients from '../components/Clients';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Achievements from '../components/Achievements';
import ClientFeedbacks from '../components/ClientFeedbacks';
import CallMeBack from '../components/CallMeBack';
import FavIcon from '../images/DigiBaap_Logo.svg';

const IndexPage = () => {
  return (
    <>
      {/* <CallMeBack /> */}
      <Home />
      <Work />
      <TrustUs />
      <Clients />
      <Services />
      <Industries />
      <Achievements />
      <ClientFeedbacks />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>DigiBaapp</title>
    <link id="icon" rel="icon" href={FavIcon} />
  </>
);
