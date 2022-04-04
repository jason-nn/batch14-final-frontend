import React from 'react';

import SignedIn from 'components/shared/SignedIn';
import Navbar from 'components/shared/Navbar';

const Home: React.FC = () => {
  return (
    <SignedIn>
      <Navbar />
      <div>Home</div>
    </SignedIn>
  );
};

export default Home;
