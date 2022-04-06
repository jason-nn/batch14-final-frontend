import React, { useContext } from 'react';
import styled from 'styled-components';

import { PortfolioContext } from 'components/home/PortfolioContextProvider';

import TableContainer from 'components/shared/TableContainer';

const DollarCostAverageHeaders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  text-transform: uppercase;
  color: #1d4ed8;
  font-family: CircularStd-Bold;
  font-size: 10px;
`;

const DollarCostAverageTable: React.FC = () => {
  const { portfolio } = useContext(PortfolioContext);
  console.log(portfolio);

  return (
    <TableContainer isEmpty={Object.keys(portfolio).length < 1}>
      <DollarCostAverageHeaders>
        <div>Cryptocurrency Symbol</div>
        <div>Dollar Cost Average</div>
        <div>Current Market Price</div>
        <div>Profit &amp; Loss</div>
      </DollarCostAverageHeaders>
    </TableContainer>
  );
};

export default DollarCostAverageTable;
