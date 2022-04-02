import React from 'react';
import { Link } from 'react-router-dom';

import AuthOuterContainer from 'components/auth/AuthOuterContainer';
import AuthInnerContainer from 'components/auth/AuthInnerContainer';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';

import Form from 'components/shared/Form';
import BaseInput from 'components/shared/inputs/BaseInput';

const SignIn: React.FC = () => {
  return (
    <AuthOuterContainer>
      <AuthInnerContainer>
        <AuthHeader />

        <Form
          header="Sign In"
          onSubmit={() => {
            console.log('Call create session API');
          }}
          disabled={true}
          buttonText="Sign in"
        >
          <BaseInput label="Email" type="text" />
          <BaseInput label="Password" type="password" />
        </Form>

        <AuthFooter>
          No account yet?&nbsp;
          <Link to="/sign-up">Sign up here</Link>
        </AuthFooter>
      </AuthInnerContainer>
    </AuthOuterContainer>
  );
};

export default SignIn;
