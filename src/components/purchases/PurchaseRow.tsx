import React from 'react';

import SpaceBetween from 'components/shared/SpaceBetween';
import TableRowContainer from 'components/shared/TableRowContainer';

interface PurchaseRowProps {
  cryptocurrency: string;
  price: number;
  quantity: number;
}

const PurchaseRow: React.FC<PurchaseRowProps> = ({
  cryptocurrency,
  price,
  quantity,
}) => {
  return (
    <TableRowContainer columns={3}>
      <div>{cryptocurrency.toUpperCase()}</div>
      <SpaceBetween>
        <span>$</span>
        <span>{price.toFixed(2)}</span>
      </SpaceBetween>
      <div>{quantity}</div>
    </TableRowContainer>
  );
};

export default PurchaseRow;
