import React, { useContext } from 'react';
import styled from 'styled-components';

import { PortfolioContext } from './PortfolioContextProvider';

const DollarCostAverageTableContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;

  padding: 20px 30px;

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DollarCostAverageHeaders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  text-transform: uppercase;
  color: #1d4ed8;
  font-family: CircularStd-Bold;
  font-size: 10px;
`;

// const Empty = styled.div`
//   font-family: CircularStd-Bold;
//   font-size: 20px;

//   display: flex;
//   justify-content: center;

//   padding: 20px;
// `;

const DollarCostAverageTable: React.FC = () => {
  const { portfolio } = useContext(PortfolioContext);
  console.log(portfolio);

  return (
    <DollarCostAverageTableContainer>
      <DollarCostAverageHeaders>
        <div>Cryptocurrency Symbol</div>
        <div>Dollar Cost Average</div>
        <div>Current Market Price</div>
        <div>Profit &amp; Loss</div>
      </DollarCostAverageHeaders>
    </DollarCostAverageTableContainer>
  );
};

export default DollarCostAverageTable;
