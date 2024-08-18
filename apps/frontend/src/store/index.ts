import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';

// Existing counter slice
interface CounterState {
  value: number;
}

const initialCounterState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Configure the store with both the counter and profile reducers
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    profile: profileReducer, // Added the profile reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
