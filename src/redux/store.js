import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './tasksSlice';
import contactsFilterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: contactsFilterReducer,
  },
});
