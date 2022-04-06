import styled from 'styled-components';

interface TableRowContainerProps {
  columns: number;
}

const TableHeaders = styled.div<TableRowContainerProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    new Array(props.columns).fill('1fr').join(' ')};

  text-transform: uppercase;
  color: #1d4ed8;
  font-family: CircularStd-Bold;
  font-size: 10px;
`;

export default TableHeaders;
