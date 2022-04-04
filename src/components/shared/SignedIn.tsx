import React, { useContext, useMemo } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from 'components/shared/UserContextProvider';

const SignedIn: React.FC = ({ children }) => {
  const { userState } = useContext(UserContext);

  const isSignedInValue = useMemo(
    () => userState.email && userState.token && userState.id,
    [userState.email, userState.token, userState.id]
  );

  return (
    <div>
      {isSignedInValue ? children : <Navigate to="/sign-in" replace={true} />}
    </div>
  );
};

export default SignedIn;
