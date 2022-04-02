import React from 'react';
import styled from 'styled-components';

const NeumorphismOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(239, 239, 239);
`;

const NeumorphismInnerContainer = styled.div`
  width: 50vw;
  height: 50vh;

  padding: 30px;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgb(218 218 222) 1px 1px 2px, rgb(255 255 255) -1px -1px 2px;
`;

const Lowered = styled.div`
  width: 100%;

  padding: 10px;
  border-radius: 200px;

  box-shadow: rgb(215 215 215) -1px -1px 2px, rgb(255 255 255) 1px 1px 2px;
`;

const Raised = styled.div`
  width: 50%;
  height: 100%;

  padding: 40px;
  border-radius: 200px;

  box-shadow: rgb(218 218 222) 1px 1px 2px, rgb(255 255 255) -1px -1px 2px;
`;

const Neumorphism: React.FC = () => {
  return (
    <NeumorphismOuterContainer>
      <NeumorphismInnerContainer>
        <Lowered>
          <Raised />
        </Lowered>
      </NeumorphismInnerContainer>
    </NeumorphismOuterContainer>
  );
};

export default Neumorphism;
