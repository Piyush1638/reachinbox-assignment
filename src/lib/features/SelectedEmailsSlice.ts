import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Email } from "../interfaces/Interfaces";

interface EmailState {
  selectedEmails: Email[]; // Changed to an array
}

const initialState: EmailState = {
  selectedEmails: [], // Initialize as an empty array
};

const selectedEmailSlice = createSlice({
  name: "selectedEmail",
  initialState,
  reducers: {
    setSelectedEmails(state, action: PayloadAction<Email[]>) {
      console.log(action.payload);
      state.selectedEmails = action.payload;
    },
    addSelectedEmail(state, action: PayloadAction<Email>) {
      state.selectedEmails.push(action.payload);
    },
    clearSelectedEmails(state) {
      state.selectedEmails = [];
    },
  },
});

export const { setSelectedEmails, addSelectedEmail, clearSelectedEmails } = selectedEmailSlice.actions;
export default selectedEmailSlice.reducer;
