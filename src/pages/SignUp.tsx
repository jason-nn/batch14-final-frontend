import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from 'components/shared/Logo';

const SignUpOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpInnerContainer = styled.div`
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

const SignUp: React.FC = () => {
  return (
    <SignUpOuterContainer>
      <SignUpInnerContainer>
        <Header>
          <Logo scale={50} />
        </Header>

        <Footer>
          Already have an account?&nbsp;
          <Link to="/sign-in">Sign in here</Link>
        </Footer>
      </SignUpInnerContainer>
    </SignUpOuterContainer>
  );
};

export default SignUp;
