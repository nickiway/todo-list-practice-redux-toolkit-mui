// * state general
import { configureStore } from '@reduxjs/toolkit';

// * hooks
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// * slicer reducers
import todosReducer from './slices/todosSlice';

export const store = configureStore({
  reducer: {
    todosReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['todos/add'],
        ignoredPaths: ['todosReducer.storage'],
      },
    }),
});

// type of root state
export type RootState = ReturnType<typeof store.getState>;

// type of dispatch
export type AppDispatch = typeof store.dispatch;

// customized funcs for ts
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
