import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  contactId: null,
  contactName: "",
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.contactId = action.payload.id;
      state.contactName = action.payload.name;
    },
    closeModal(state) {
      state.isOpen = false;
      state.contactId = null;
      state.contactName = "";
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export default slice.reducer;
