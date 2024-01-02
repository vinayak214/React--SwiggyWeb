import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //  The below code was used in vannila redux, where we cannot mutate the state and return is mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      //Redux tool-kit
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.filter();
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
