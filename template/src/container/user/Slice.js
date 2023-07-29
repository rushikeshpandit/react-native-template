import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoading: false,
    error: false,
    errorMessage: '',
    user: {},
    userList: [],
  },
  reducers: {

    getUserList: (state, action) => {
      return { ...state, userList: [], isLoading: true };
    },
    setUserList: (state, action) => {
      return { ...state, userList: action.payload, isLoading: false };
    },
    apiError: (state, action) => {
      return { ...state, error: true, errorMessage: action.payload }
    }
  },
});

export const {
  getUserList,
  setUserList,
  apiError
} = userSlice.actions;

export default userSlice.reducer;
