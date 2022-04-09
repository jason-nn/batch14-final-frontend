import React, { useContext, useEffect, useState } from 'react';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';

import Portfolio, { PortfolioValue } from 'schemas/portfolio';

const PortfolioContext = React.createContext<{
  portfolio: Portfolio;
  isPortfolioContextReady: boolean;
  setIsPortfolioContextReady: React.Dispatch<
    React.SetStateAction<boolean>
  > | null;
}>({
  portfolio: {},
  isPortfolioContextReady: false,
  setIsPortfolioContextReady: null,
});

const PortfolioContextProvider: React.FC = ({ children }) => {
  const { userPurchases } = useContext(PurchaseContext);

  const [portfolio, setPortfolio] = useState<Portfolio>({});

  const [isPortfolioContextReady, setIsPortfolioContextReady] =
    useState<boolean>(false);

  const sortPortfolio = (portfolio: Portfolio) => {
    return Object.keys(portfolio)
      .sort((a, b) => {
        const aValue: PortfolioValue = portfolio[a];
        const bValue: PortfolioValue = portfolio[b];

        return (
          bValue.sum * bValue.currentPrice - aValue.sum * aValue.currentPrice
        );
      })
      .reduce((accumulator: Portfolio, key) => {
        accumulator[key] = portfolio[key];
        return accumulator;
      }, {});
  };

  useEffect(() => {
    setPortfolio(
      sortPortfolio(
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
        }, {})
      )
    );
    setIsPortfolioContextReady(true);
  }, [userPurchases]);

  return (
    <PortfolioContext.Provider
      value={{ portfolio, isPortfolioContextReady, setIsPortfolioContextReady }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
export { PortfolioContext };
