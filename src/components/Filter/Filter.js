import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import s from '../app.module.css';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <>
      <label>
        <span>Find contacts by name </span>

        <input
          className={s.input}
          type="text"
          name="filter"
          value={filterName}
          onChange={e => handleFilterChange(e)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Search..."
        />
      </label>
    </>
  );
};

export default Filter;
