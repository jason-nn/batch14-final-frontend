import React from 'react';

import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';

const Purchases: React.FC = () => {
  return (
    <SignedIn>
      <Navbar selected="purchases" />
      <div>Purchases</div>
    </SignedIn>
  );
};

export default Purchases;
