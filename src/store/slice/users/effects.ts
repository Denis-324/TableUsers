import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from 'shared';
import { UsersType } from './types';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await makeRequest<UsersType[]>({
        url: 'users',
      });

      console.log(response.data);
      return response.data;
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  },
);
