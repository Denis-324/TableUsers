import React, { useEffect } from 'react';
import { TableUsers } from 'shared';
import styled from 'styled-components';
import { UsersEffects, UsersSelectors } from 'store';
import { useDispatch, useSelector } from 'react-redux';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const tableData = useSelector(UsersSelectors.usersSelector);

  useEffect(() => {
    dispatch(UsersEffects.fetchUsers());
  }, []);
  return (
    <Wrap>
      <TableUsers tableData={tableData} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  height: 100vh;
`;
