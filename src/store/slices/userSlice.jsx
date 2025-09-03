// src/store/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
      state.userId = action.payload?.id || null;
    },
    logoutUser(state) {
      state.userInfo = null;
      state.userId = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
