import React, { useContext, useMemo } from 'react';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';

import Portfolio from 'schemas/portfolio';

const PortfolioContext = React.createContext<{ portfolio: Portfolio }>({
  portfolio: {},
});

const PortfolioContextProvider: React.FC = ({ children }) => {
  const { userPurchases } = useContext(PurchaseContext);

  const portfolio = useMemo(
    () =>
      userPurchases.reduce((accumulator: Portfolio, purchase) => {
        const symbol = purchase.cryptocurrency.symbol;
        const currentPrice = purchase.cryptocurrency.price;
        const purchaseQuantity = purchase.quantity;
        const purchasePrice = purchase.price;

        if (accumulator[symbol]) {
          accumulator[symbol].sum += purchaseQuantity;
          accumulator[symbol].sumProduct += purchaseQuantity * purchasePrice;
        } else {
          accumulator[symbol] = {
            symbol,
            currentPrice,
            sum: purchaseQuantity,
            sumProduct: purchaseQuantity * purchasePrice,
          };
        }
        return accumulator;
      }, {}),
    [userPurchases]
  );

  return (
    <PortfolioContext.Provider value={{ portfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
export { PortfolioContext };
