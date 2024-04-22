// * state
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// * types
import { ITodoSlice } from '../../interfaces/todoSlice';
import { UIdType } from '../../types/general';
import TodoObjectModel from '../../models/TodoObjectModel';

// * initial state
const initialState = { storage: [] } satisfies ITodoSlice as ITodoSlice;

const slice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    // add new todo to list
    add(state, actions: PayloadAction<TodoObjectModel>) {
      state.storage = [...state.storage, actions.payload];
    },

    // toggling status of todo
    toggleStatus(state, action: PayloadAction<UIdType>) {
      const index = state.storage.findIndex(
        (item) => item.uniqueKey === action.payload,
      );

      // if item does not exists
      if (index === -1) return;

      // toggling status
      const updatedStorage = state.storage.map((item, idx) => {
        if (idx === index) {
          item.toggleStatus();
        }

        return item;
      });

      // trigger state update
      state.storage = updatedStorage;
    },
  },
});

export const { add, toggleStatus } = slice.actions;
export default slice.reducer;
