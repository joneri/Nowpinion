import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  bio: string;
}

const initialState: ProfileState = {
  name: 'John Doe',
  bio: 'This is the bio of John Doe.',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<{ name: string; bio: string }>) => {
      state.name = action.payload.name;
      state.bio = action.payload.bio;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
