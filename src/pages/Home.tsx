import React from 'react';

import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';

const Home: React.FC = () => {
  return (
    <SignedIn>
      <Navbar />
      <div>Home</div>
    </SignedIn>
  );
};

export default Home;
