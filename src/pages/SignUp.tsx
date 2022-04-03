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
  const [submittingValue, setSubmittingValue] = useState<boolean>(false);

  const [emailValue, setEmailValue] = useState<string>('');
  const [isEmailValueValid, setIsEmailValueValid] = useState<boolean>(false);

  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isPasswordValueValid, setIsPasswordValueValid] =
    useState<boolean>(false);

  const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('');
  const [isConfirmPasswordValueValid, setIsConfirmPasswordValueValid] =
    useState<boolean>(false);

  return (
    <AuthOuterContainer>
      <AuthInnerContainer>
        <AuthHeader />

        <Form
          header="Sign Up"
          onSubmit={() => {
            setSubmittingValue(true);
            console.log('Call create registration API');
            setTimeout(() => {
              console.log('Finish call');
              setSubmittingValue(false);
            }, 3000);
          }}
          disabled={
            !(
              isEmailValueValid &&
              isPasswordValueValid &&
              isConfirmPasswordValueValid &&
              isPasswordValueValid === isConfirmPasswordValueValid
            )
          }
          submitting={submittingValue}
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
              .regex(new RegExp(`\\b${confirmPasswordValue}\\b`), {
                message: 'Passwords must match',
              })}
            watch={confirmPasswordValue}
          />
          <ValidatedBaseInput
            label="Confirm Password"
            type="password"
            value={confirmPasswordValue}
            setValue={setConfirmPasswordValue}
            setIsValid={setIsConfirmPasswordValueValid}
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
