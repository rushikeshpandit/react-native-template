// import * as Font from "expo-font";
import * as React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import MainNavigator from "./src/navigation/stacks/MainNavigator";
import Store from "./src/store/store";

export default function App() {

  let persistor = persistStore(Store);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
