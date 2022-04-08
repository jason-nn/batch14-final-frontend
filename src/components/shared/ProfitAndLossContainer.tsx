import styled from 'styled-components';

interface ProfitAndLossContainerProps {
  value: number;
}

const ProfitAndLossContainer = styled.div<ProfitAndLossContainerProps>`
  color: ${(props) => (props.value < 0 ? '#EF4444' : '#10B981')};
`;

export default ProfitAndLossContainer;
