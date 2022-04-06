import React, { useContext } from 'react';

import { PortfolioContext } from 'components/home/PortfolioContextProvider';
import PortfolioRow from 'components/home/PortfolioRow';

import TableContainer from 'components/shared/TableContainer';
import TableHeaders from 'components/shared/TableHeaders';

const PortfolioTable: React.FC = () => {
  const { portfolio } = useContext(PortfolioContext);

  return (
    <TableContainer isEmpty={Object.keys(portfolio).length < 1}>
      <TableHeaders columns={4}>
        <div>Cryptocurrency</div>
        <div>Acquisition Cost</div>
        <div>Current Value</div>
        <div>Profit &amp; Loss</div>
      </TableHeaders>
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
