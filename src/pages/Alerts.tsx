import React, { useState } from 'react';
import styled from 'styled-components';

import BodyContainer from 'components/shared/BodyContainer';
import Header from 'components/shared/Header';
import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';
import PrimaryButton from 'components/shared/buttons/PrimaryButton';
import BaseInput from 'components/shared/inputs/BaseInput';

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Alerts: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <SignedIn>
      <Navbar selected="alerts" />
      <BodyContainer>
        <SpaceBetween>
          <Header>Price Alerts</Header>
          <PrimaryButton
            buttonText="New price alert"
            disabled={false}
            loading={false}
          />
        </SpaceBetween>

        <BaseInput
          label="Search Crypto"
          showLabel={false}
          type="text"
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search by crypto"
          backgroundColor="#FFFFFF"
        />
      </BodyContainer>
    </SignedIn>
  );
};

export default Alerts;
