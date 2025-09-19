import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  loading: boolean;
}

const initialState: UIState = {
  loading: false,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = testSlice.actions;
export default testSlice.reducer;
