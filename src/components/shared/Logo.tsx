import React from 'react';
import styled from 'styled-components';

import logo from 'images/logo.svg';

interface LogoProps {
  scale: number;
}

const LogoContainer = styled.div<LogoProps>`
  display: flex;
  gap: 10px;

  span {
    font-family: CircularStd-Black;
    font-size: ${(props) => `${props.scale}px`};
    color: #1d4ed8;
  }

  img {
    height: ${(props) => `${props.scale}px`};
    width: ${(props) => `${props.scale}px`};
  }
`;

const Logo: React.FC<LogoProps> = ({ scale }) => {
  return (
    <LogoContainer scale={scale}>
      <img src={logo} alt="" />
      <span>hodlr</span>
    </LogoContainer>
  );
};

export default Logo;
