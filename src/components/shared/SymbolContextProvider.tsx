import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from 'components/shared/UserContextProvider';

import hodlr from 'services/hodlr';

const SymbolContext = React.createContext<{ symbols: string[] }>({
  symbols: [],
});

const SymbolContextProvider: React.FC = ({ children }) => {
  const { userState } = useContext(UserContext);

  const [symbols, setSymbols] = useState<string[]>([]);

  useEffect(() => {
    if (userState.token) {
      hodlr
        .symbols(userState.token)
        .then((response) => {
          console.log(response);
          setSymbols(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userState]);

  return (
    <SymbolContext.Provider value={{ symbols: symbols }}>
      {children}
    </SymbolContext.Provider>
  );
};

export default SymbolContextProvider;
export { SymbolContext };
