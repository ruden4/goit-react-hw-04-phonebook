import { useState, useEffect } from 'react';
import css from './App.module.css'

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export function App() {
  
 const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );

  useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
},[contacts])

  const addToContacts = data => {
    const contact = { ...data, id: nanoid() };
    if (contacts
      .map(contact => contact.name.toLowerCase())
      .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(s => [contact, ...contacts])
    }
  }
  
  const deleteHandle = e => {
    const deleteName = e.currentTarget.id.toLowerCase();
    setContacts(contacts.filter(contact => contact.name.toLowerCase() !== deleteName))
  };

    return (
      <div className={css.container}>
        <h1 className={css.bookTitle}>Phonebook</h1>
        <ContactForm onSubmit={addToContacts} />
        <h2 className={css.contactsList}>Contacts</h2>
        <Filter />
        {contacts.length !== 0 && <ContactList contacts={contacts}
          onDelete={deleteHandle}/>}
      </div>
    )
  }