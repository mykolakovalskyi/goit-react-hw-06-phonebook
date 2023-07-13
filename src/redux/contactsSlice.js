import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { loadContacts } from './localStorage';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: loadContacts(),

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    setContacts(state, action) {
      state = action.payload;
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
