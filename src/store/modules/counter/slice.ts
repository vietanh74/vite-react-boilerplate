import { createSlice } from '@reduxjs/toolkit';

import { ICounter } from './types';

const initialState: ICounter = {
  payload: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter(state) {
      state.payload++;
    },
  },
});

export const { setCounter } = slice.actions;

export default slice.reducer;
