const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function loadContacts() {
  try {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (!parsedContacts) {
      return contactsInitialState;
    }
    return parsedContacts;
  } catch (error) {
    console.log(error);
  }
}

export async function saveContacts(contacts) {
  try {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
}
