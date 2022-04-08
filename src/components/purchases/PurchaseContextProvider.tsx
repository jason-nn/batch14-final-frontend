import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from 'components/shared/UserContextProvider';

import Purchase from 'schemas/purchase';

import hodlr from 'services/hodlr';

const PurchaseContext = React.createContext<{
  userPurchases: Purchase[];
  setUserPurchases: React.Dispatch<React.SetStateAction<Purchase[]>> | null;
}>({ userPurchases: [], setUserPurchases: null });

const PurchaseContextProvider: React.FC = ({ children }) => {
  const [userPurchases, setUserPurchases] = useState<Purchase[]>([]);

  const { userState } = useContext(UserContext);

  useEffect(() => {
    if (userState.token) {
      hodlr
        .purchases(userState.token)
        .then((response) => {
          console.log(response);
          setUserPurchases(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userState]);

  return (
    <PurchaseContext.Provider value={{ userPurchases, setUserPurchases }}>
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseContextProvider;
export { PurchaseContext };
