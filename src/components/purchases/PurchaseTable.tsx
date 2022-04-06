import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';
import PurchaseRow from 'components/purchases/PurchaseRow';

import TableContainer from 'components/shared/TableContainer';

interface PurchaseTableProps {
  filter: string;
}

const PurchaseHeaders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  text-transform: uppercase;
  color: #1d4ed8;
  font-family: CircularStd-Bold;
  font-size: 10px;
`;

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
      <PurchaseHeaders>
        <div>Cryptocurrency</div>
        <div>Price at Time of Purchase</div>
        <div>Quantity Purchased</div>
      </PurchaseHeaders>
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
