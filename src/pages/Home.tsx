import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import BodyContainer from 'components/shared/BodyContainer';
import Header from 'components/shared/Header';
import Navbar from 'components/shared/Navbar';
import SignedIn from 'components/shared/SignedIn';
import PrimaryButton from 'components/shared/buttons/PrimaryButton';

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
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
          <Header>DCA and Current Price</Header>
          <Header>Portfolio</Header>
          <AlignRight>
            <PrimaryButton
              buttonText="New purchase"
              disabled={false}
              loading={false}
            />
          </AlignRight>
        </BodyContainer>
      </motion.div>
    </SignedIn>
  );
};

export default Home;
