import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlic';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
