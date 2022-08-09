import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import {
  TypedUseSelectorHook,
  useDispatch as useTypedDispatch,
  useSelector as useTypedSelector,
} from "react-redux";
import localSlice from "./localSlice";
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";

const combinedReducer = combineReducers({
  user: userSlice,
  local: localSlice,
  theme: themeSlice,
});

// const reducer = (state: any, action: AnyAction) => {
//   if (action.type === HYDRATE) {
//     console.log("@@@ HYDRATE @@@");
//     const nextState = {
//       ...state,
//       ...action.payload,
//     };

//     return nextState;
//   }

//   return combinedReducer(state, action);
// };

const store = configureStore({
  reducer: combinedReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = useTypedDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useTypedSelector;

const makeStore: MakeStore<any> = () => store;

export const wrapper = createWrapper(makeStore);
