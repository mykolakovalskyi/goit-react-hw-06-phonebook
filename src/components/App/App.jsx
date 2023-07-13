import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { addContact, deleteContact, setContacts } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const dispatch = useDispatch();

  const addNewContact = newContact => {
    let nameCheckingArray = contacts.map(contact => contact.name);
    if (!nameCheckingArray.includes(newContact.name)) {
      dispatch(addContact(newContact.name, newContact.number));
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const setContactFilter = value => {
    dispatch(setFilter(value));
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

  useEffect(() => {
    try {
      const savedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(savedContacts);
      if (parsedContacts) {
        dispatch(setContacts(parsedContacts));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.wraper}>
      <h1>Phonebook</h1>
      <ContactForm newContactData={addNewContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter setFilter={setContactFilter}></Filter>
      <ContactList
        contacts={filterContacts()}
        deleteContact={delContact}
      ></ContactList>
    </div>
  );
}
