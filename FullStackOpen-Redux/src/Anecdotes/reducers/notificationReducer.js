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

export const setNotification = (message, time) => {
  return dispatch => {
    dispatch(showNotification({message, showDisplay: true}));
    setTimeout(() => {
      dispatch(showNotification({message: "", showDisplay: false}));
    }, time);
  };
};

export default notificationSlice.reducer;