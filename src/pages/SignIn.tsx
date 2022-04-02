import React from 'react';
import { Link } from 'react-router-dom';

import AuthOuterContainer from 'components/auth/AuthOuterContainer';
import AuthInnerContainer from 'components/auth/AuthInnerContainer';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';

import Form from 'components/shared/Form';

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
        >
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
          </div>
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
