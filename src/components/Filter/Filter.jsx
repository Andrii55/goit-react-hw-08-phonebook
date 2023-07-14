import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={css.input__filter}
      onChange={e => dispatch(addFilter(e.target.value))}
      type="text"
    />
  );
};
