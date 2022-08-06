import { createSelector } from '@reduxjs/toolkit';
import { RootStateType } from 'store/rootReducer';

const selectSelf = (state: RootStateType) => state.users;

export const usersSelector = createSelector(selectSelf, (usersState) =>
  usersState.users.map((el) => ({
    key: el.id,
    name: el.name.split(' ')[0],
    surname: el.name.split(' ')[1],
    site: el.website,
  })));

export const usersErrSelector = createSelector(selectSelf, (usersState) => usersState.error);

export const usersStatusSelector = createSelector(selectSelf, (usersState) => usersState.status);
