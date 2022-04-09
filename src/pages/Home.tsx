import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import PortfolioTable from 'components/home/PortfolioTable';
import PricesTable from 'components/home/PricesTable';

import NewPurchaseButton from 'components/purchases/NewPurchaseButton';

import BodyContainer from 'components/shared/BodyContainer';
import Header from 'components/shared/Header';
import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';

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
            <Header>Prices</Header>
            <NewPurchaseButton />
          </SpaceBetween>
          <PricesTable />
          <div />
          <Header>Portfolio</Header>
          <PortfolioTable />
        </BodyContainer>
      </motion.div>
    </SignedIn>
  );
};

export default Home;
