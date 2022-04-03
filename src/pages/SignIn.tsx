import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import hodlr from 'services/hodlr';

import AuthOuterContainer from 'components/auth/AuthOuterContainer';
import AuthInnerContainer from 'components/auth/AuthInnerContainer';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';

import Form from 'components/shared/Form';
import ValidatedBaseInput from 'components/shared/inputs/ValidatedBaseInput';

const SignIn: React.FC = () => {
  const [submittingValue, setSubmittingValue] = useState<boolean>(false);

  const [emailValue, setEmailValue] = useState<string>('');
  const [isEmailValueValid, setIsEmailValueValid] = useState<boolean>(false);

  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isPasswordValueValid, setIsPasswordValueValid] =
    useState<boolean>(false);

  const onSubmit = useCallback(() => {
    setSubmittingValue(true);
    hodlr
      .signIn({ email: emailValue, password: passwordValue })
      .then((response) => {
        console.log(response);
        setSubmittingValue(false);
      })
      .catch((error) => {
        console.log(error);
        setSubmittingValue(false);
      });
  }, [emailValue, passwordValue]);

  const disabled = useMemo(
    () => !(isEmailValueValid && isPasswordValueValid),
    [isEmailValueValid, isPasswordValueValid]
  );

  return (
    <AuthOuterContainer>
      <AuthInnerContainer>
        <AuthHeader />

        <Form
          header="Sign In"
          onSubmit={onSubmit}
          disabled={disabled}
          submitting={submittingValue}
          buttonText="Sign in"
        >
          <ValidatedBaseInput
            label="Email"
            type="text"
            value={emailValue}
            setValue={setEmailValue}
            setIsValid={setIsEmailValueValid}
            validators={z
              .string()
              .min(1, { message: 'This field is required' })
              .email({ message: 'Must be a valid email' })}
          />
          <ValidatedBaseInput
            label="Password"
            type="password"
            value={passwordValue}
            setValue={setPasswordValue}
            setIsValid={setIsPasswordValueValid}
            validators={z
              .string()
              .min(1, { message: 'This field is required' })
              .min(8, { message: 'Must be at least 8 characters' })}
          />
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
