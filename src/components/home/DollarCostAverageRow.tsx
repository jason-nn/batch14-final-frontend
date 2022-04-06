import React, { useMemo } from 'react';
import styled from 'styled-components';

interface DollarCostAverageRowProps {
  symbol: string;
  dollarCostAverage: number;
  currentPrice: number;
  profitAndLoss: number;
}

interface ProfitAndLossContainerProps {
  negative: boolean;
}

const DollarCostAverageRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  font-family: CircularStd-Bold;
  font-size: 14px;
`;

const ProfitAndLossContainer = styled.div<ProfitAndLossContainerProps>`
  color: ${(props) => (props.negative ? '#EF4444' : '#10B981')};
`;

const DollarCostAverageRow: React.FC<DollarCostAverageRowProps> = ({
  symbol,
  dollarCostAverage,
  currentPrice,
  profitAndLoss,
}) => {
  const formattedProfitAndLoss = useMemo(() => {
    if (profitAndLoss < 0) {
      return `- ${Math.abs(profitAndLoss * 100).toFixed(2)}%`;
    } else {
      return `+ ${(profitAndLoss * 100).toFixed(2)}%`;
    }
  }, [profitAndLoss]);

  return (
    <DollarCostAverageRowContainer>
      <div>{symbol.toUpperCase()}</div>
      <div>$&nbsp;{dollarCostAverage.toFixed(2)}</div>
      <div>$&nbsp;{currentPrice.toFixed(2)}</div>
      <ProfitAndLossContainer negative={profitAndLoss < 0}>
        {formattedProfitAndLoss}
      </ProfitAndLossContainer>
    </DollarCostAverageRowContainer>
  );
};

export default DollarCostAverageRow;
