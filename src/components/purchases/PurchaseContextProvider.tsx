import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from 'components/shared/UserContextProvider';

import Purchase from 'schemas/purchase';

import hodlr from 'services/hodlr';

const PurchaseContext = React.createContext<{
  userPurchases: Purchase[];
  setUserPurchases: React.Dispatch<React.SetStateAction<Purchase[]>> | null;
  isPurchaseContextReady: boolean;
  setIsPurchaseContextReady: React.Dispatch<
    React.SetStateAction<boolean>
  > | null;
}>({
  userPurchases: [],
  setUserPurchases: null,
  isPurchaseContextReady: false,
  setIsPurchaseContextReady: null,
});

const PurchaseContextProvider: React.FC = ({ children }) => {
  const { userState } = useContext(UserContext);

  const [userPurchases, setUserPurchases] = useState<Purchase[]>([]);

  const [isPurchaseContextReady, setIsPurchaseContextReady] =
    useState<boolean>(false);

  useEffect(() => {
    if (userState.token) {
      hodlr
        .purchases(userState.token)
        .then((response) => {
          console.log(response);
          setUserPurchases(response.data);
          setIsPurchaseContextReady(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userState]);

  return (
    <PurchaseContext.Provider
      value={{
        userPurchases,
        setUserPurchases,
        isPurchaseContextReady,
        setIsPurchaseContextReady,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseContextProvider;
export { PurchaseContext };
