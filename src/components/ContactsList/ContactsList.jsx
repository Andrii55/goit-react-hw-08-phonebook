import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';

import css from './ContactsList.module.css';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // Andrii_Homziak@gmail.com
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
