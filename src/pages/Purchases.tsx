import React from 'react';

import SignedIn from 'components/shared/SignedIn';
import Navbar from 'components/shared/Navbar';

const Purchases: React.FC = () => {
  return (
    <SignedIn>
      <Navbar />
      <div>Purchases</div>
    </SignedIn>
  );
};

export default Purchases;
