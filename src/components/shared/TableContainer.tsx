import React from 'react';
import styled from 'styled-components';

interface TableContainerProps {
  isEmpty: boolean;
}

const TableContainerContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;

  padding: 20px 30px;

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Empty = styled.div`
  font-family: CircularStd-Bold;
  font-size: 20px;

  display: flex;
  justify-content: center;

  padding: 20px;
`;

const TableContainer: React.FC<TableContainerProps> = ({
  isEmpty,
  children,
}) => {
  return (
    <TableContainerContainer>
      {!isEmpty ? children : <Empty>There's nothing here</Empty>}
    </TableContainerContainer>
  );
};

export default TableContainer;
