import React, { useContext } from 'react';

import { PortfolioContext } from 'components/home/PortfolioContextProvider';
import PricesRow from 'components/home/PricesRow';

import TableContainer from 'components/shared/TableContainer';
import TableHeaders from 'components/shared/TableHeaders';

const PricesTable: React.FC = () => {
  const { portfolio } = useContext(PortfolioContext);

  return (
    <TableContainer isEmpty={Object.keys(portfolio).length < 1}>
      <TableHeaders columns={4}>
        <div>Coin</div>
        <div>Average Buy Price</div>
        <div>Current Market Price</div>
        <div>Profit &amp; Loss</div>
      </TableHeaders>
      {Object.keys(portfolio).map((symbol, key) => {
        const data = portfolio[symbol];

        const averageBuyPrice = data.sumProduct / data.sum;
        const currentPrice = data.currentPrice;

        return (
          <PricesRow
            key={key}
            symbol={symbol}
            averageBuyPrice={averageBuyPrice}
            currentPrice={currentPrice}
            profitAndLoss={(currentPrice - averageBuyPrice) / averageBuyPrice}
          />
        );
      })}
    </TableContainer>
  );
};

export default PricesTable;
