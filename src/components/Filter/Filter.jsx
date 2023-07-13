import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ setFilter }) {
  const setFilterValue = e => {
    let value = e.currentTarget.value.toLowerCase();
    setFilter(value);
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
        onChange={setFilterValue}
        className={css.filterInput}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
