import { useDispatch } from 'react-redux';

import css from './ContactItem.module.css';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
