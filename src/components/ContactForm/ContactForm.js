import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import s from '../app.module.css';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const lowerCaseName = name.toLowerCase();

    if (items.some(e => e.name.toLowerCase() === lowerCaseName)) {
      return alert(`${name.toUpperCase()} is already in contacts`);
    } else {
      onSubmitForm(name, number);
    }
    reset();
  };
  const onSubmitForm = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      phone: number,
    };
    dispatch(addContact(contact));
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            onChange={event => handleChange(event)}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </label>
        <label>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={event => handleChange(event)}
            value={number}
            required
            placeholder="Number"
          />
        </label>
        <button className={s.buttonSub} type="submit">
          Add contact
        </button>
      </form>
      <div>
        <ul></ul>
      </div>
    </>
  );
}

export default ContactForm;
