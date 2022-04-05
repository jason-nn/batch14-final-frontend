import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';
import PurchaseRow from 'components/purchases/PurchaseRow';

interface PurchaseTableProps {
  filter: string;
}

const PurchaseTableContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;

  padding: 20px 30px;

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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
    <PurchaseTableContainer>
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
    </PurchaseTableContainer>
  );
};

export default PurchaseTable;
