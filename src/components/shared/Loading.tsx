import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoadingProps {
  loading: boolean;
}

const LoadingOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 4;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #f8fafc;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading: React.FC<LoadingProps> = ({ loading, children }) => {
  return (
    <div>
      {loading ? (
        <LoadingOuterContainer>
          <ClipLoader color="#1D4ED8" size={200} />
        </LoadingOuterContainer>
      ) : (
        children
      )}
    </div>
  );
};

export default Loading;
