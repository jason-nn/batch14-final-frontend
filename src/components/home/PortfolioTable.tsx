import React, { useContext } from 'react';
import styled from 'styled-components';

import { PortfolioContext } from 'components/home/PortfolioContextProvider';
import PortfolioRow from 'components/home/PortfolioRow';

import TableContainer from 'components/shared/TableContainer';

const PortfolioHeaders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  text-transform: uppercase;
  color: #1d4ed8;
  font-family: CircularStd-Bold;
  font-size: 10px;
`;

const PortfolioTable: React.FC = () => {
  const { portfolio } = useContext(PortfolioContext);

  return (
    <TableContainer isEmpty={Object.keys(portfolio).length < 1}>
      <PortfolioHeaders>
        <div>Cryptocurrency</div>
        <div>Acquisition Cost</div>
        <div>Current Value</div>
        <div>Profit &amp; Loss</div>
      </PortfolioHeaders>
      {Object.keys(portfolio).map((symbol, key) => {
        const data = portfolio[symbol];

        const dollarCostAverage = data.sumProduct / data.sum;
        const currentPrice = data.currentPrice;

        const acquisitionCost = dollarCostAverage * data.sum;
        const currentValue = currentPrice * data.sum;

        return (
          <PortfolioRow
            key={key}
            symbol={symbol}
            acquisitionCost={acquisitionCost}
            currentValue={currentValue}
            profitAndLoss={currentValue - acquisitionCost}
          />
        );
      })}
    </TableContainer>
  );
};

export default PortfolioTable;
