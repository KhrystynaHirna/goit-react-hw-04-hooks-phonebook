import { useState } from 'react';
import ContactForm from '../phonebookForm/ContactForm';
import ContactList from '../contacts/ContactList';
import { Filter } from '../filter/Filter';
import useLocalStorage from 'components/hooks/useLocalStorage';
import s from '../app/App.module.css';
import { nanoid } from "nanoid";


export default function App() {

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');


  const onSubmit = (formData) => {
     if (contacts.find(contact => contact.name === formData.name)) {
      return alert(`${formData.name} is already in contacts`);
    }
    let id = nanoid();
    setContacts(prev => [...prev, {...formData, id}])
  }

  const onFilter = evt => {
    setFilter(evt.target.value);
  }

  const onDeleteContact = (contactId) => {
    setContacts(prev => prev.filter(item => item.id !== contactId))
  }

    const filterContacts = () =>  {contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    }
  
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onFilterInput={onFilter} />
        <ContactList formData={filterContacts} onDeleteBtn={onDeleteContact}/>
      </div>
    );

  
};

