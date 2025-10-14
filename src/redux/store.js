import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import signupReducer from './slices/signupSlice'
import forgotPasswordReducer from './slices/forgetSlice'
import resetPasswordReducer from './slices/resetPasswordSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,


  },
});
