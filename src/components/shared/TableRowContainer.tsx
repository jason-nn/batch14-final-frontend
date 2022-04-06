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
`;

export default TableRowContainer;
