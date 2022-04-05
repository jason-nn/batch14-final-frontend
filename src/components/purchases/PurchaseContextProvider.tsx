import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from 'components/shared/UserContextProvider';

import hodlr from 'services/hodlr';

interface Cryptocurrency {
  id: number;
  created_at: string;
  updated_at: string;

  price: number;
  name: string;
  symbol: string;
}

interface Purchase {
  id: number;
  created_at: string;
  updated_at: string;

  price: number;
  quantity: number;
  cryptocurrency: Cryptocurrency;

  user_id: number;
  cryptocurrency_id: number;
}

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
