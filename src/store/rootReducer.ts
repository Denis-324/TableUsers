import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import {
  usersReducer,

} from './slice';

const rootReducer = combineReducers({
  users: usersReducer,

});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
