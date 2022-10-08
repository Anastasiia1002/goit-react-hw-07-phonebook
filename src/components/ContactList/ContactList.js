import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from '../app.module.css';
import {
  selectContacts,
  selectError,
  selectFilter,
} from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  const filterContacts = () => {
    if (filterName) {
      const filterLow = filterName.toLowerCase().trim();
      return items.filter(({ name }) => name.toLowerCase().includes(filterLow));
    } else {
      return items;
    }
  };

  const filteredContacts = filterContacts();
  return (
    <>
      <div>{error && <b>{error}</b>}</div>

      <ul className={s.items}>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li className={s.item} key={id}>
              <span>{name}: </span>
              <span>{phone}</span>

              <button
                className={s.buttonDel}
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
