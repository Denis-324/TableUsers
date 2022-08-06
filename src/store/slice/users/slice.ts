import { createSlice } from '@reduxjs/toolkit';

import { ReducerType } from './types';
import { fetchUsers } from './effects';

const initialState: ReducerType = {
  users: [],
  status: null,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(fetchUsers.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      users: action.payload,
    }));
    builder.addCase(fetchUsers.rejected, (state, action) => ({
      ...state,
      status: 'fail',
      error: action.payload as string,
    }));
  },
});
