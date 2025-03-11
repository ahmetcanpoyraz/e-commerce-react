import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/Types";

export interface AppSliceType {
  currentUser: UserType | null;
  loading: boolean;
}

const initialState = {
  currentUser: null,
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCurrentUser: (
      state: AppSliceType,
      action: PayloadAction<UserType | null>
    ) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setLoading, setCurrentUser } = appSlice.actions;

export default appSlice.reducer;
