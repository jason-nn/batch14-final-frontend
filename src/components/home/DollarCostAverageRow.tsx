import React from 'react';
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
  color: ${(props) => (props.negative ? '#EF4444' : '#34D399')};
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  width: 50%;
  margin: 0 auto;
`;

const DollarCostAverageRow: React.FC<DollarCostAverageRowProps> = ({
  symbol,
  dollarCostAverage,
  currentPrice,
  profitAndLoss,
}) => {
  return (
    <DollarCostAverageRowContainer>
      <div>{symbol.toUpperCase()}</div>
      <SpaceBetween>
        <span>$</span>
        <span>{dollarCostAverage.toFixed(2)}</span>
      </SpaceBetween>
      <SpaceBetween>
        <span>$</span>
        <span>{currentPrice.toFixed(2)}</span>
      </SpaceBetween>
      <ProfitAndLossContainer negative={profitAndLoss < 0}>
        <SpaceBetween>
          <span>{profitAndLoss < 0 ? '-' : '+'}</span>
          <span>{`${Math.abs(profitAndLoss * 100).toFixed(2)}%`}</span>
        </SpaceBetween>
      </ProfitAndLossContainer>
    </DollarCostAverageRowContainer>
  );
};

export default DollarCostAverageRow;
