import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from 'components/shared/UserContextProvider';

import hodlr from 'services/hodlr';

const SymbolContext = React.createContext<{
  symbols: string[];
  isSymbolContextReady: boolean;
  setIsSymbolContextReady: React.Dispatch<React.SetStateAction<boolean>> | null;
}>({
  symbols: [],
  isSymbolContextReady: false,
  setIsSymbolContextReady: null,
});

const SymbolContextProvider: React.FC = ({ children }) => {
  const { userState } = useContext(UserContext);

  const [symbols, setSymbols] = useState<string[]>([]);

  const [isSymbolContextReady, setIsSymbolContextReady] =
    useState<boolean>(false);

  useEffect(() => {
    if (userState.token) {
      hodlr
        .symbols(userState.token)
        .then((response) => {
          console.log(response);
          setSymbols(response.data);
          setIsSymbolContextReady(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userState]);

  return (
    <SymbolContext.Provider
      value={{ symbols, isSymbolContextReady, setIsSymbolContextReady }}
    >
      {children}
    </SymbolContext.Provider>
  );
};

export default SymbolContextProvider;
export { SymbolContext };
