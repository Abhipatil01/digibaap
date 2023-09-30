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
import ProjectInMind from '../components/ProjectInMind';
import CallMeBack from '../components/CallMeBack';

const IndexPage = () => {
  return (
    <main className="w-auto h-screen">
      <CallMeBack />
      <Header />
      <Home />
      <Work />
      <TrustUs />
      <Clients />
      <Services />
      <Industries />
      <Achievements />
      <ClientFeedbacks />
      <ProjectInMind />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>DigiBaapp</title>;
