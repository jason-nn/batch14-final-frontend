import React, { useContext, useMemo } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { Navigate } from 'react-router-dom';

import { PurchaseContext } from 'components/purchases/PurchaseContextProvider';

import { UserContext } from 'components/shared/UserContextProvider';

import hodlr from 'services/hodlr';

const SignedIn: React.FC = ({ children }) => {
  const { userState } = useContext(UserContext);
  const { setUserPurchases } = useContext(PurchaseContext);

  const isSignedInValue = useMemo(
    () => userState.email && userState.token && userState.id,
    [userState.email, userState.token, userState.id]
  );

  return (
    <div>
      {isSignedInValue ? (
        <ActionCableConsumer
          channel={{ channel: 'PriceUpdateChannel' }}
          onReceived={() => {
            if (userState.token) {
              hodlr
                .purchases(userState.token)
                .then((response) => {
                  console.log(response);
                  setUserPurchases && setUserPurchases(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }}
        >
          {children}
        </ActionCableConsumer>
      ) : (
        <Navigate to="/sign-in" replace={true} />
      )}
    </div>
  );
};

export default SignedIn;
