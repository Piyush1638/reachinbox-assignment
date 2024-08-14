import { configureStore } from "@reduxjs/toolkit";
import selectedEmailReducer from "./features/SelectedEmailsSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
        selectedEmail: selectedEmailReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
