import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';

import Logo from 'components/shared/Logo';
import NavItem from 'components/shared/NavItem';
import { UserContext } from 'components/shared/UserContextProvider';
import SecondaryButton from 'components/shared/buttons/SecondaryButton';
import { SymbolContext } from 'components/shared/SymbolContextProvider';
import { ToastContext } from 'components/shared/toasts/ToastContextProvider';

interface NavbarProps {
  selected: 'home' | 'purchases';
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
`;

const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  const { userDispatch } = useContext(UserContext);
  const { toastDispatch } = useContext(ToastContext);

  const { setIsPurchaseContextReady } = useContext(PurchaseContext);
  const { setIsSymbolContextReady } = useContext(SymbolContext);

  const [buttonIsLoadingValue, setbuttonIsLoadingValue] = useState(false);

  const onClick = () => {
    if (userDispatch) {
      setbuttonIsLoadingValue(true);
      setTimeout(() => {
        setbuttonIsLoadingValue(false);
        userDispatch({
          type: 'SIGNOUT',
        });
        toastDispatch &&
          toastDispatch({ type: 'SUCCESS', message: 'Successful sign out' });

        setIsPurchaseContextReady && setIsPurchaseContextReady(false);
        setIsSymbolContextReady && setIsSymbolContextReady(false);
      }, 500);
    }
  };

  return (
    <div>
      <NavbarContainer>
        <NavLeft>
          <NavLink to="/">
            <Logo scale={30} />
          </NavLink>
          <NavItem
            selected={selected}
            matchSelectedTo="home"
            route="/"
            text="Home"
          />
          <NavItem
            selected={selected}
            matchSelectedTo="purchases"
            route="/purchases"
            text="Purchases"
          />
        </NavLeft>
        <NavRight>
          <SecondaryButton
            buttonText="Sign out"
            buttonWidth="110px"
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
