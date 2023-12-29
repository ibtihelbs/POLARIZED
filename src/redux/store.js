import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";
import orderReducer from "./order";
import registerReducer from "./register";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const root = combineReducers({
  cart: cartReducer,
  user: userReducer,
  register: registerReducer,
  order: orderReducer,
});
const persistedReducer = persistReducer(persistConfig, root);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
