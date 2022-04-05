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

const PurchaseRow: React.FC<PurchaseRowProps> = ({
  cryptocurrency,
  price,
  quantity,
}) => {
  return (
    <PurchaseRowContainer>
      <div>{cryptocurrency.toUpperCase()}</div>
      <div>$&nbsp;{price.toFixed(2)}</div>
      <div>{quantity}</div>
    </PurchaseRowContainer>
  );
};

export default PurchaseRow;
