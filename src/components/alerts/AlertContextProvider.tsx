import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from 'components/shared/UserContextProvider';

import Alert from 'schemas/alert';

import hodlr from 'services/hodlr';

const AlertContext = React.createContext<{
  userAlerts: Alert[];
  setUserAlerts: React.Dispatch<React.SetStateAction<Alert[]>> | null;
}>({ userAlerts: [], setUserAlerts: null });

const AlertContextProvider: React.FC = ({ children }) => {
  const [userAlerts, setUserAlerts] = useState<Alert[]>([]);

  const { userState } = useContext(UserContext);

  useEffect(() => {
    if (userState.token) {
      hodlr
        .alerts(userState.token)
        .then((response) => {
          console.log(response);
          setUserAlerts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userState]);

  return (
    <AlertContext.Provider value={{ userAlerts, setUserAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
export { AlertContext };
