import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  contactId: null,
  contactName: "",
  position: { top: 0, left: 0 },
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.contactId = action.payload.id;
      state.contactName = action.payload.name;
      state.position = action.payload.position;
    },
    closeModal(state) {
      state.isOpen = false;
      state.contactId = null;
      state.contactName = "";
      state.position = { top: 0, left: 0 };
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export default slice.reducer;
