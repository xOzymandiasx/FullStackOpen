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
      state.showDisplay = action.payload.showDisplay
      state.message = action.payload.message;
    }
  }
});

export const {showNotification} = notificationSlice.actions;
export default notificationSlice.reducer;