import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import close from 'images/close.svg';

interface BaseModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  motionKey: string;
}

const BaseModalOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  background: rgba(248, 250, 252, 0.95);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BaseModalInnerContainer = styled.div`
  width: 30vw;

  padding: 30px;
  background: #ffffff;
  border-radius: 16px;

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CloseIconContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

const CloseIcon = styled.img`
  height: 25px;
  width: auto;

  cursor: pointer;
`;

const BaseModal: React.FC<BaseModalProps> = ({
  motionKey,
  isOpen,
  setIsOpen,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <BaseModalOuterContainer
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <motion.div
            key={motionKey}
            initial={{ opacity: 0, y: '-100vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100vh' }}
            transition={{ duration: 0.5 }}
          >
            <BaseModalInnerContainer
              onClick={(e) => {
                // so clicking this container does not trigger parent container onclick
                e.stopPropagation();
              }}
            >
              <CloseIconContainer>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <CloseIcon
                    src={close}
                    alt=""
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                </motion.div>
              </CloseIconContainer>
              {children}
            </BaseModalInnerContainer>
          </motion.div>
        </BaseModalOuterContainer>
      ) : null}
    </AnimatePresence>
  );
};

export default BaseModal;
