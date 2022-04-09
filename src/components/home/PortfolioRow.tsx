import React from 'react';

import ProfitAndLossContainer from 'components/shared/ProfitAndLossContainer';
import SpaceBetween from 'components/shared/SpaceBetween';
import TableRowContainer from 'components/shared/TableRowContainer';

interface PortfolioRowProps {
  symbol: string;
  acquisitionCost: number;
  currentValue: number;
  profitAndLoss: number;
}

const PortfolioRow: React.FC<PortfolioRowProps> = ({
  symbol,
  acquisitionCost,
  currentValue,
  profitAndLoss,
}) => {
  return (
    <TableRowContainer columns={4}>
      <div>{symbol.toUpperCase()}</div>
      <SpaceBetween>
        <span>$</span>
        <span>{acquisitionCost.toFixed(2)}</span>
      </SpaceBetween>
      <SpaceBetween>
        <span>$</span>
        <span>{currentValue.toFixed(2)}</span>
      </SpaceBetween>
      <ProfitAndLossContainer value={profitAndLoss}>
        <SpaceBetween>
          <span>{profitAndLoss < 0 ? '-' : '+'}</span>
          <span>$&thinsp;{Math.abs(profitAndLoss).toFixed(2)}</span>
        </SpaceBetween>
      </ProfitAndLossContainer>
    </TableRowContainer>
  );
};

export default PortfolioRow;
