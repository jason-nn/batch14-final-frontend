import React from 'react';

import ProfitAndLossContainer from 'components/shared/ProfitAndLossContainer';
import SpaceBetween from 'components/shared/SpaceBetween';
import TableRowContainer from 'components/shared/TableRowContainer';

interface DollarCostAverageRowProps {
  symbol: string;
  dollarCostAverage: number;
  currentPrice: number;
  profitAndLoss: number;
}

const DollarCostAverageRow: React.FC<DollarCostAverageRowProps> = ({
  symbol,
  dollarCostAverage,
  currentPrice,
  profitAndLoss,
}) => {
  return (
    <TableRowContainer columns={4}>
      <div>{symbol.toUpperCase()}</div>
      <SpaceBetween>
        <span>$</span>
        <span>{dollarCostAverage.toFixed(2)}</span>
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

export default DollarCostAverageRow;
