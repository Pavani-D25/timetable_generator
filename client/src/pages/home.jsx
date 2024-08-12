// src/pages/Home.js

import React from 'react';
import NavScrollExample from '../components/Navbar';
import ActionAreaCard from '../components/ActionAreaCard';

const Home = () => {
  return (
    <div>
      <NavScrollExample />
      <ActionAreaCard />
      <div className="container">
        {/* Additional content if needed */}
      </div>
    </div>
  );
}

export default Home;
