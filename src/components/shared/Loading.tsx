import React, { useContext, useMemo } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

import { PortfolioContext } from 'components/home/PortfolioContextProvider';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';

import { SymbolContext } from 'components/shared/SymbolContextProvider';

const LoadingOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 4;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #f8fafc;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading: React.FC = ({ children }) => {
  const { isPurchaseContextReady } = useContext(PurchaseContext);
  const { isSymbolContextReady } = useContext(SymbolContext);
  const { isPortfolioContextReady } = useContext(PortfolioContext);

  const isLoading = useMemo(
    () =>
      !(
        isPurchaseContextReady &&
        isSymbolContextReady &&
        isPortfolioContextReady
      ),
    [isPurchaseContextReady, isSymbolContextReady, isPortfolioContextReady]
  );

  return (
    <div>
      {isLoading ? (
        <LoadingOuterContainer>
          <ClipLoader color="#1D4ED8" size={200} />
        </LoadingOuterContainer>
      ) : (
        children
      )}
    </div>
  );
};

export default Loading;
