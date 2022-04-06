import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import DollarCostAverageTable from 'components/home/DollarCostAverageTable';

import BodyContainer from 'components/shared/BodyContainer';
import Header from 'components/shared/Header';
import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';
import PrimaryButton from 'components/shared/buttons/PrimaryButton';

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Home: React.FC = () => {
  return (
    <SignedIn>
      <Navbar selected="home" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BodyContainer>
          <SpaceBetween>
            <Header>Dollar Cost Average</Header>
            <PrimaryButton
              buttonText="New purchase"
              disabled={false}
              loading={false}
            />
          </SpaceBetween>
          <DollarCostAverageTable />
          <Header>Portfolio</Header>
        </BodyContainer>
      </motion.div>
    </SignedIn>
  );
};

export default Home;
