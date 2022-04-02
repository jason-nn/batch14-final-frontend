import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import AuthOuterContainer from 'components/auth/AuthOuterContainer';
import AuthInnerContainer from 'components/auth/AuthInnerContainer';
import AuthHeader from 'components/auth/AuthHeader';
import AuthFooter from 'components/auth/AuthFooter';

import Form from 'components/shared/Form';
import ValidatedBaseInput from 'components/shared/inputs/ValidatedBaseInput';

const SignUp: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [isEmailValueValid, setIsEmailValueValid] = useState<boolean>(false);

  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isPasswordValueValid, setIsPasswordValueValid] =
    useState<boolean>(false);

  const [passwordConfirmationValue, setPasswordConfirmationValue] =
    useState<string>('');
  const [
    isPasswordConfirmationValueValid,
    setIsPasswordConfirmationValueValid,
  ] = useState<boolean>(false);

  return (
    <AuthOuterContainer>
      <AuthInnerContainer>
        <AuthHeader />

        <Form
          header="Sign Up"
          onSubmit={() => {
            console.log('Call create registration API');
          }}
          disabled={
            !(
              isEmailValueValid &&
              isPasswordValueValid &&
              isPasswordConfirmationValueValid &&
              isPasswordValueValid === isPasswordConfirmationValueValid
            )
          }
          buttonText="Sign up"
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
              .min(8, { message: 'Must be at least 8 characters' })
              .regex(new RegExp(`\\b${passwordConfirmationValue}\\b`), {
                message: 'Passwords must match',
              })}
            watch={passwordConfirmationValue}
          />
          <ValidatedBaseInput
            label="Password Confirmation"
            type="password"
            value={passwordConfirmationValue}
            setValue={setPasswordConfirmationValue}
            setIsValid={setIsPasswordConfirmationValueValid}
            validators={z
              .string()
              .min(1, { message: 'This field is required' })
              .min(8, { message: 'Must be at least 8 characters' })
              .regex(new RegExp(`\\b${passwordValue}\\b`), {
                message: 'Passwords must match',
              })}
            watch={passwordValue}
          />
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
