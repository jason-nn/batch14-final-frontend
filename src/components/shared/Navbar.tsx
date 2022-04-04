import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Logo from 'components/shared/Logo';
import { UserContext } from 'components/shared/UserContextProvider';
import SecondaryButton from 'components/shared/buttons/SecondaryButton';

interface NavbarProps {
  selected: 'home' | 'purchases' | 'alerts';
}

const NavbarContainer = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ffffff;

  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 60px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: baseline;
  gap: 30px;

  a {
    font-family: CircularStd-Bold;
    font-size: 15px;
  }

  .active {
    color: #1d4ed8;
  }
`;

const NavRight = styled.div`
  display: flex;
  gap: 30px;
`;

const Filler = styled.div`
  /* pushes down page content by height of navbar */

  width: 100vw;
  height: 60px;
  background-color: #ffffff;
`;

const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  const { userDispatch } = useContext(UserContext);

  const [buttonIsLoadingValue, setbuttonIsLoadingValue] = useState(false);

  const onClick = () => {
    if (userDispatch) {
      setbuttonIsLoadingValue(true);
      setTimeout(() => {
        setbuttonIsLoadingValue(false);
        userDispatch({
          type: 'SIGNOUT',
        });
      }, 1000);
    }
  };

  return (
    <div>
      <NavbarContainer>
        <NavLeft>
          <NavLink to="/">
            <Logo scale={30} />
          </NavLink>
          <motion.div
            initial={{ scale: selected === 'home' ? 1.1 : 1.0 }}
            animate={{ scale: 1.0 }}
            whileHover={{ scale: 1.1 }}
          >
            <NavLink to="/">Home</NavLink>
          </motion.div>
          <motion.div
            initial={{ scale: selected === 'purchases' ? 1.1 : 1.0 }}
            animate={{ scale: 1.0 }}
            whileHover={{ scale: 1.1 }}
          >
            <NavLink to="/purchases">Purchases</NavLink>
          </motion.div>
          <motion.div
            initial={{ scale: selected === 'alerts' ? 1.1 : 1.0 }}
            animate={{ scale: 1.0 }}
            whileHover={{ scale: 1.1 }}
          >
            <NavLink to="/alerts">Alerts</NavLink>
          </motion.div>
        </NavLeft>
        <NavRight>
          <SecondaryButton
            buttonText="Sign out"
            disabled={false}
            loading={buttonIsLoadingValue}
            onClick={onClick}
          />
        </NavRight>
      </NavbarContainer>

      <Filler />
    </div>
  );
};

export default Navbar;
