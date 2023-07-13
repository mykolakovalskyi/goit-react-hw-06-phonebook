import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, deleteContact }) {
  const setContactToDelete = e => {
    const contactId = e.target.id;
    deleteContact(contactId);
  };

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button
              id={contact.id}
              onClick={setContactToDelete}
              className={css.deleteButton}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
