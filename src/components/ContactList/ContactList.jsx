import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const dispatch = useDispatch();

  const deleteSelectedContact = e => {
    const contactId = e.target.id;
    dispatch(deleteContact(contactId));
  };

  const filterContacts = () => {
    if (contactsFilter === '') {
      return contacts;
    }

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <ul>
      {filterContacts().map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button
              id={contact.id}
              onClick={deleteSelectedContact}
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
