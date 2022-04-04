import React from 'react';
import styled from 'styled-components';

import Logo from 'components/shared/Logo';

const AuthHeaderContainer = styled.div`
  margin: 30px 0px 10px 0px;
`;

const AuthHeader: React.FC = () => {
  return (
    <AuthHeaderContainer>
      <Logo scale={50} />
    </AuthHeaderContainer>
  );
};

export default AuthHeader;
