import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import {
  TypedUseSelectorHook,
  useDispatch as useTypedDispatch,
  useSelector as useTypedSelector,
} from 'react-redux';
import localSlice from '@store/localSlice';
import searchSlice from '@store/searchSlice';
import themeSlice from '@store/themeSlice';
import userSlice from '@store/userSlice';

const combinedReducer = combineReducers({
  user: userSlice,
  local: localSlice,
  theme: themeSlice,
  search: searchSlice,
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
