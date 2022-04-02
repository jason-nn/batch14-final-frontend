import React from 'react';
import { Link } from 'react-router-dom';

import AuthOuterContainer from 'components/auth/AuthOuterContainer';
import AuthInnerContainer from 'components/auth/AuthInnerContainer';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';

const SignIn: React.FC = () => {
  return (
    <AuthOuterContainer>
      <AuthInnerContainer>
        <AuthHeader />

        <AuthFooter>
          No account yet?&nbsp;
          <Link to="/sign-up">Sign up here</Link>
        </AuthFooter>
      </AuthInnerContainer>
    </AuthOuterContainer>
  );
};

export default SignIn;
