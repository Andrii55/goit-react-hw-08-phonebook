import { useDispatch, useSelector } from 'react-redux';

import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert('contact already exist');
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input required name="name" className={css.input} />
      <input required name="number" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
