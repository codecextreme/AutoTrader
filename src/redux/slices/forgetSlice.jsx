import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios.js';

// Thunk to handle forgot password
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post('users/forgotPassword/', email);
      return response.data; // Assuming response contains a success message
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to send reset link');
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  message: null,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    resetForgotPasswordState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message || 'Reset link sent successfully.';
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetForgotPasswordState } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
