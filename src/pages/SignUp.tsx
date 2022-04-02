import React from 'react';
import { Link } from 'react-router-dom';

import AuthOuterContainer from 'components/auth/AuthOuterContainer';
import AuthInnerContainer from 'components/auth/AuthInnerContainer';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';

import Form from 'components/shared/Form';

const SignUp: React.FC = () => {
  return (
    <AuthOuterContainer>
      <AuthInnerContainer>
        <AuthHeader />

        <Form
          header="Sign Up"
          onSubmit={() => {
            console.log('Call create registration API');
          }}
          disabled={true}
        >
          <div>
            <label>Email</label>
          </div>
          <div>
            <label>Password</label>
          </div>
          <div>
            <label>Password Confirmation</label>
          </div>
        </Form>

        <AuthFooter>
          Already have an account?&nbsp;
          <Link to="/sign-in">Sign in here</Link>
        </AuthFooter>
      </AuthInnerContainer>
    </AuthOuterContainer>
  );
};

export default SignUp;
