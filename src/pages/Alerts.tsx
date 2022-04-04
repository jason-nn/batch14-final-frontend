import React from 'react';

import SignedIn from 'components/shared/SignedIn';
import Navbar from 'components/shared/Navbar';

const Alerts: React.FC = () => {
  return (
    <SignedIn>
      <Navbar />
      <div>Alerts</div>
    </SignedIn>
  );
};

export default Alerts;
