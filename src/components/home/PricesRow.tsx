import React from 'react';

import ProfitAndLossContainer from 'components/shared/ProfitAndLossContainer';
import SpaceBetween from 'components/shared/SpaceBetween';
import TableRowContainer from 'components/shared/TableRowContainer';

interface PricesRowProps {
  symbol: string;
  averageBuyPrice: number;
  currentPrice: number;
  profitAndLoss: number;
}

const PricesRow: React.FC<PricesRowProps> = ({
  symbol,
  averageBuyPrice,
  currentPrice,
  profitAndLoss,
}) => {
  return (
    <TableRowContainer columns={4}>
      <div>{symbol.toUpperCase()}</div>
      <SpaceBetween>
        <span>$</span>
        <span>{averageBuyPrice.toFixed(2)}</span>
      </SpaceBetween>
      <SpaceBetween>
        <span>$</span>
        <span>{currentPrice.toFixed(2)}</span>
      </SpaceBetween>
      <ProfitAndLossContainer value={profitAndLoss}>
        <SpaceBetween>
          <span>{profitAndLoss < 0 ? '-' : '+'}</span>
          <span>{`${Math.abs(profitAndLoss * 100).toFixed(2)}`}&thinsp;%</span>
        </SpaceBetween>
      </ProfitAndLossContainer>
    </TableRowContainer>
  );
};

export default PricesRow;
