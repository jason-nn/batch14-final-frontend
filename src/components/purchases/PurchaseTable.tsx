import React, { useContext, useMemo } from 'react';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';
import PurchaseRow from 'components/purchases/PurchaseRow';

import TableContainer from 'components/shared/TableContainer';
import TableHeaders from 'components/shared/TableHeaders';

interface PurchaseTableProps {
  filter: string;
}

const PurchaseTable: React.FC<PurchaseTableProps> = ({ filter }) => {
  const { userPurchases } = useContext(PurchaseContext);

  const filteredUserPurchases = useMemo(
    () =>
      userPurchases.filter((purchase) =>
        purchase.cryptocurrency.symbol.includes(filter.toLowerCase())
      ),
    [filter, userPurchases]
  );

  return (
    <TableContainer isEmpty={filteredUserPurchases.length < 1}>
      <TableHeaders columns={3}>
        <div>Cryptocurrency</div>
        <div>Price at Time of Purchase</div>
        <div>Quantity Purchased</div>
      </TableHeaders>
      {filteredUserPurchases.map((purchase, key) => (
        <PurchaseRow
          key={key}
          cryptocurrency={purchase.cryptocurrency.symbol}
          price={purchase.price}
          quantity={purchase.quantity}
        />
      ))}
    </TableContainer>
  );
};

export default PurchaseTable;
