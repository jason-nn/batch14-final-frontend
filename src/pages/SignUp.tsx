import React from 'react';
import { Link } from 'react-router-dom';

import AuthOuterContainer from 'components/auth/AuthOuterContainer';
import AuthInnerContainer from 'components/auth/AuthInnerContainer';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';

const SignUp: React.FC = () => {
  return (
    <AuthOuterContainer>
      <AuthInnerContainer>
        <AuthHeader />

        <AuthFooter>
          Already have an account?&nbsp;
          <Link to="/sign-in">Sign in here</Link>
        </AuthFooter>
      </AuthInnerContainer>
    </AuthOuterContainer>
  );
};

export default SignUp;
