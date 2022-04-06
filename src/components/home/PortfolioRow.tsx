import React from 'react';
import styled from 'styled-components';

interface PortfolioRowProps {
  symbol: string;
  acquisitionCost: number;
  currentValue: number;
  profitAndLoss: number;
}

interface ProfitAndLossContainerProps {
  negative: boolean;
}

const PortfolioRowContainer = styled.div`
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

const PortfolioRow: React.FC<PortfolioRowProps> = ({
  symbol,
  acquisitionCost,
  currentValue,
  profitAndLoss,
}) => {
  return (
    <PortfolioRowContainer>
      <div>{symbol.toUpperCase()}</div>
      <SpaceBetween>
        <span>$</span>
        <span>{acquisitionCost.toFixed(2)}</span>
      </SpaceBetween>
      <SpaceBetween>
        <span>$</span>
        <span>{currentValue.toFixed(2)}</span>
      </SpaceBetween>
      <ProfitAndLossContainer negative={profitAndLoss < 0}>
        <SpaceBetween>
          <span>$</span>
          <span>
            {profitAndLoss < 0 ? '-' : '+'}&nbsp;
            {Math.abs(profitAndLoss).toFixed(2)}
          </span>
        </SpaceBetween>
      </ProfitAndLossContainer>
    </PortfolioRowContainer>
  );
};

export default PortfolioRow;
