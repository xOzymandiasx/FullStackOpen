import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  showDisplay: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.showDisplay = true
      state.message = action.payload;
    }
  }
});

export const {showNotification} = notificationSlice.actions;
export default notificationSlice.reducer;