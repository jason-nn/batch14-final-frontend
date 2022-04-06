import React from 'react';
import styled from 'styled-components';

interface PurchaseRowProps {
  cryptocurrency: string;
  price: number;
  quantity: number;
}

const PurchaseRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  font-family: CircularStd-Bold;
  font-size: 14px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  width: 50%;
  margin: 0 auto;
`;

const PurchaseRow: React.FC<PurchaseRowProps> = ({
  cryptocurrency,
  price,
  quantity,
}) => {
  return (
    <PurchaseRowContainer>
      <div>{cryptocurrency.toUpperCase()}</div>
      <SpaceBetween>
        <span>$</span>
        <span>{price.toFixed(2)}</span>
      </SpaceBetween>
      <div>{quantity}</div>
    </PurchaseRowContainer>
  );
};

export default PurchaseRow;
