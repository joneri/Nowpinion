import { configureStore } from '@reduxjs/toolkit';
import bettingReducer from './slices/bettingSlice';

const store = configureStore({
  reducer: {
    betting: bettingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;