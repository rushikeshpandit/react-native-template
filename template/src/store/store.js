import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "./rootSaga";
import { persistReducer } from "redux-persist";
import { allReducer } from "./rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'react-native-template',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, allReducer)

const middleWare = [sagaMiddleware, logger]

const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(middleWare),
  devTools: process.env.NODE_ENV === 'development' ? true : false
});
sagaMiddleware.run(watcherSaga)

export default Store;
