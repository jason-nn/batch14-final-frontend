import React, { useReducer } from 'react';

interface UserState {
  email: string | null;
  token: string | null;
  id: number | null;
}

interface UserActionSignIn {
  type: 'SIGNIN';
  payload: UserState;
}

interface UserActionSignOut {
  type: 'SIGNOUT';
}

const initialUserState: UserState = localStorage.hodlrUserState
  ? JSON.parse(localStorage.hodlrUserState)
  : {
      email: null,
      token: null,
      id: null,
    };

const reducer = (
  userState: UserState,
  userAction: UserActionSignIn | UserActionSignOut
) => {
  switch (userAction.type) {
    case 'SIGNIN':
      localStorage.hodlrUserState = JSON.stringify(userAction.payload);
      return { ...userState, ...userAction.payload };
    case 'SIGNOUT':
      localStorage.removeItem('hodlrUserState');
      return { ...userState, email: null, token: null, id: null };
  }
};

const UserContext = React.createContext<{
  userState: UserState;
  userDispatch: React.Dispatch<UserActionSignIn | UserActionSignOut> | null;
}>({
  userState: initialUserState,
  userDispatch: null,
});

const UserContextProvider: React.FC = ({ children }) => {
  const [userState, userDispatch] = useReducer(reducer, initialUserState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export { UserContext };
