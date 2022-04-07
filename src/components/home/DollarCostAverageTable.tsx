import React, { useContext } from 'react';

import DollarCostAverageRow from 'components/home/DollarCostAverageRow';
import { PortfolioContext } from 'components/home/PortfolioContextProvider';

import TableContainer from 'components/shared/TableContainer';
import TableHeaders from 'components/shared/TableHeaders';

const DollarCostAverageTable: React.FC = () => {
  const { portfolio } = useContext(PortfolioContext);

  return (
    <TableContainer isEmpty={Object.keys(portfolio).length < 1}>
      <TableHeaders columns={4}>
        <div>Cryptocurrency</div>
        <div>Dollar Cost Average</div>
        <div>Current Market Price</div>
        <div>Profit &amp; Loss</div>
      </TableHeaders>
      {Object.keys(portfolio).map((symbol, key) => {
        const data = portfolio[symbol];

        const dollarCostAverage = data.sumProduct / data.sum;
        const currentPrice = data.currentPrice;

        return (
          <DollarCostAverageRow
            key={key}
            symbol={symbol}
            dollarCostAverage={dollarCostAverage}
            currentPrice={currentPrice}
            profitAndLoss={
              (currentPrice - dollarCostAverage) / dollarCostAverage
            }
          />
        );
      })}
    </TableContainer>
  );
};

export default DollarCostAverageTable;
