import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface ColorScheme {
  text: string;
  background: string;
  border: string;
}

interface BaseToastProps {
  message: string | null;
  colorScheme: ColorScheme;
}

interface BaseToastInnerContainerProps {
  colorScheme: ColorScheme;
}

const BaseToastOuterContainer = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 30px;
  right: 60px;
`;

const BaseToastInnerContainer = styled.div<BaseToastInnerContainerProps>`
  background-color: ${(props) => props.colorScheme.background};
  border: 1.5px solid ${(props) => props.colorScheme.border};

  padding: 12px 30px;
  border-radius: 16px 0px;

  span {
    color: ${(props) => props.colorScheme.text};
    font-size: 15px;
    font-family: CircularStd-Bold;
  }

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px;
`;

const BaseToast: React.FC<BaseToastProps> = ({ message, colorScheme }) => {
  return (
    <BaseToastOuterContainer>
      <AnimatePresence>
        {message ? (
          <motion.div
            key={`${message.toLowerCase().split(' ').join('-')}-toast`}
            initial={{ opacity: 0, y: '100vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100vh' }}
            transition={{ duration: 0.5 }}
          >
            <BaseToastInnerContainer colorScheme={colorScheme}>
              <span>{message}</span>
            </BaseToastInnerContainer>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </BaseToastOuterContainer>
  );
};

export default BaseToast;
