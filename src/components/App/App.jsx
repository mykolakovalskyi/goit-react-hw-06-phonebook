import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    let nameCheckingArray = contacts.map(contact => contact.name);
    if (!nameCheckingArray.includes(newContact.name)) {
      setContacts(prevContacts => [...prevContacts, newContact]);
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const setContactFilter = value => {
    setFilter(value);
  };

  const contactsFilter = () => {
    if (filter === '') {
      return contacts;
    }

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  useEffect(() => {
    try {
      const savedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(savedContacts);
      if (parsedContacts) {
        setContacts(parsedContacts);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.wraper}>
      <h1>Phonebook</h1>
      <ContactForm newContactData={addContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter setFilter={setContactFilter}></Filter>
      <ContactList
        contacts={contactsFilter()}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
}
