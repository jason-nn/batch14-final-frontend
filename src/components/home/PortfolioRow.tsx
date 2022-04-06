import React, { useMemo } from 'react';
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
  color: ${(props) => (props.negative ? '#EF4444' : '#10B981')};
`;

const PortfolioRow: React.FC<PortfolioRowProps> = ({
  symbol,
  acquisitionCost,
  currentValue,
  profitAndLoss,
}) => {
  const formattedProfitAndLoss = useMemo(() => {
    if (profitAndLoss < 0) {
      return `- $${Math.abs(profitAndLoss).toFixed(2)}`;
    } else {
      return `+ $${profitAndLoss.toFixed(2)}`;
    }
  }, [profitAndLoss]);

  return (
    <PortfolioRowContainer>
      <div>{symbol.toUpperCase()}</div>
      <div>$&nbsp;{acquisitionCost.toFixed(2)}</div>
      <div>$&nbsp;{currentValue.toFixed(2)}</div>
      <ProfitAndLossContainer negative={profitAndLoss < 0}>
        {formattedProfitAndLoss}
      </ProfitAndLossContainer>
    </PortfolioRowContainer>
  );
};

export default PortfolioRow;
