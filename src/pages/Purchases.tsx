import React, { useState } from 'react';
import styled from 'styled-components';

import PurchaseTable from 'components/purchases/PurchaseTable';

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

const Purchases: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <SignedIn>
      <Navbar selected="purchases" />
      <BodyContainer>
        <SpaceBetween>
          <Header>Purchases</Header>
          <PrimaryButton
            buttonText="New purchase"
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

        <PurchaseTable />
      </BodyContainer>
    </SignedIn>
  );
};

export default Purchases;
