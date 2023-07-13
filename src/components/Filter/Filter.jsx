import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const setContactFilter = e => {
    let value = e.currentTarget.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.filterLabel}>
        Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={setContactFilter}
        className={css.filterInput}
      ></input>
    </div>
  );
}
