import styled from 'styled-components';

const AuthInnerContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 16px;

  width: calc(100vw / 3);

  box-shadow: -0.1rem -0.1rem 0.3rem #ffffff,
    0.1rem 0.1rem 0.3rem rgb(174 174 192 / 40%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default AuthInnerContainer;
