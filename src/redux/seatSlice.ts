import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Seat } from "../utils/seats";

export interface SeatState {
  selectedSeats: Seat[];
}

const initialState: SeatState = {
  selectedSeats: [],
};

export const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Seat>) => {
      state.selectedSeats = [...state.selectedSeats, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      const newValue = [...state.selectedSeats];

      newValue.splice(action.payload, 1);
      state.selectedSeats = newValue;
    },
  },
});

export const { add, remove } = seatSlice.actions;

export default seatSlice.reducer;
