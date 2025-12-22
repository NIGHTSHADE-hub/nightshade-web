import React from 'react';
import Hero from './Hero';
import Manifesto from './About';
import Paths from './Domains';
import Artifacts from './Artifacts';
import ShadowSystems from './ShadowSystems';
import CoreTeam from './CoreTeam';
import Prophecy from './Prophecy';
import Initiation from './JoinForm';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="relative z-10">
      <Hero />
      <Manifesto />
      <Prophecy />
      <Paths />
      <Artifacts />
      <ShadowSystems />
      <CoreTeam />
      <Initiation />
      <Footer />
    </div>
  );
};

export default Home;
