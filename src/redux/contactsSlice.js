// import { createSlice, combineReducers } from '@reduxjs/toolkit';

// const initialState = [
//   //   JSON.parse(localStorage.getItem('contacts')) || [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   //   ],
// ];

// const contactsListSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, { payload }) {
//       //   return {
//       //     ...state,
//       //     contacts: [...state.contacts, payload],
//       //   };
//       state.push(payload);
//     },
//     removeContacts(state, { payload }) {
//       return state.filter(el => el.id !== payload);
//     },
//   },
// });

// const contactsListActions = contactsListSlice.actions;
// export const { addContact, removeContacts } = contactsListActions;

// const contactsReducer = combineReducers({
//   [contactsListSlice.name]: contactsListSlice.reducer,
// });
// export default contactsReducer;
