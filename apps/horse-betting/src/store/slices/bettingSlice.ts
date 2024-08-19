import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, getGameDetails } from '../../services/api';

interface BettingState {
  betType: string | null;
  products: any;
  gameDetails: any;
  loading: boolean;
  error: string | null;
}

const initialState: BettingState = {
  betType: null,
  products: null,
  gameDetails: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'betting/fetchProducts',
  async (betType: string) => {
    const data = await getProducts(betType);
    return data;
  }
);

export const fetchGameDetails = createAsyncThunk(
  'betting/fetchGameDetails',
  async (gameId: string) => {
    const data = await getGameDetails(gameId);
    return data;
  }
);

const bettingSlice = createSlice({
  name: 'betting',
  initialState,
  reducers: {
    setBetType(state, action) {
      state.betType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(fetchGameDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.gameDetails = action.payload;
      })
      .addCase(fetchGameDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch game details';
      });
  },
});

export const { setBetType } = bettingSlice.actions;
export default bettingSlice.reducer;