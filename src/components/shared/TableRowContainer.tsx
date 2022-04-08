import styled from 'styled-components';

interface TableRowContainerProps {
  columns: number;
}

const TableRowContainer = styled.div<TableRowContainerProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    new Array(props.columns).fill('1fr').join(' ')};

  font-family: CircularStd-Bold;
  font-size: 14px;
  font-feature-settings: 'tnum' on, 'lnum' on;

  border-radius: 4px;

  &:hover {
    background-color: #eff6ff;
  }
`;

export default TableRowContainer;
