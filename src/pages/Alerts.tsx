import React from 'react';

import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';

const Alerts: React.FC = () => {
  return (
    <SignedIn>
      <Navbar selected="alerts" />
      <div>Alerts</div>
    </SignedIn>
  );
};

export default Alerts;
