import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from 'components/shared/Logo';

const SignInOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInInnerContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 16px;

  box-shadow: -0.1rem -0.1rem 0.3rem #ffffff,
    0.1rem 0.1rem 0.3rem rgb(174 174 192 / 40%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Header = styled.div`
  margin: 10px 0px;
`;

const Footer = styled.div`
  margin: 10px 0px;

  font-family: CircularStd-Black;
  font-size: 14px;

  a {
    color: #1d4ed8;
  }
`;

const SignIn: React.FC = () => {
  return (
    <SignInOuterContainer>
      <SignInInnerContainer>
        <Header>
          <Logo scale={50} />
        </Header>

        <Footer>
          No account yet?&nbsp;
          <Link to="/sign-up">Sign up here</Link>
        </Footer>
      </SignInInnerContainer>
    </SignInOuterContainer>
  );
};

export default SignIn;
