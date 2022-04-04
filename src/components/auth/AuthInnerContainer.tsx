import { motion } from 'framer-motion';
import styled from 'styled-components';

const AuthInnerContainerContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 16px;

  width: calc(100vw / 3);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AuthInnerContainer: React.FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <AuthInnerContainerContainer>{children}</AuthInnerContainerContainer>
    </motion.div>
  );
};

export default AuthInnerContainer;
