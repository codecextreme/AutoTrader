import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios.js';

// Thunk to handle login
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('users/create/', data);
      return response.data; // Should return { user, token }
    } catch (error) {
      return thunkAPI.rejectWithValue(error || 'Login failed');
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default signupSlice.reducer;
