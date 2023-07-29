import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "../container/user/Slice";

export const allReducer = combineReducers({
    userSlice: userSlice,
})