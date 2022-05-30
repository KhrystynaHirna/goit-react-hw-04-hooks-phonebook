// import { useState } from 'react';
// import ContactForm from '../phonebookForm/ContactForm';
// import ContactList from '../contacts/ContactList';
// import Filter from '../filter/Filter';
// import useLocalStorage from '../hooks/useLocalStorage';
// import s from '../app/App.module.css';
// // import { nanoid } from "nanoid";


// const App = () => {

//   const [contacts, setContacts] = useLocalStorage ('contacts', []);
//   const [filter, setFilter] = useState("");
  
  
//   // const onSubmit = (formData) => {
//   //   if (contacts.find(contact => contact.name === formData.name)) {
//   //     return alert(`${formData.name} is already in contacts`);
//   //   }
//   //   let id = nanoid();
    
//   //     setContacts(prev => [...prev, { ...formData, id }])
//   //   }

//    const onSubmit = contact => {
//     setContacts([...contacts, contact]);
//   };

//   // const onFilterInput = evt => {
//   //   setFilter(evt.target.value);
//   // }
//   const onFilterInput = value => {
//     setFilter(value);
//   };
  
//   // const onDeleteContact = (contactId) => {
//   //     setContacts(contacts.filter(item => item.id !== contactId)
//   //   )
//   // }
//   const onDeleteContact = e => {
//     const elemToRemove = e.currentTarget.parentNode.id;
//     setContacts(contacts.filter(item => item.id !== elemToRemove));
//   };
  
//   const filteredContact = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
//     );
//   }
  

//     return (
//       <div className={s.container}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={onSubmit} contacts={contacts} />
//         <h2 className={s.title}>Contacts</h2>
//         <Filter onFilterInput={onFilterInput} />
//         <ContactList contacts={contacts} filter={filter} filteredContacts={filteredContact} onDeleteBtn={onDeleteContact} />
//       </div>
//     );
  
  
// };

// export default App;








import { useState } from 'react';
import ContactForm from '../phonebookForm/ContactForm';
import ContactList from '../contacts/ContactList';
import Filter from '../filter/Filter';
import useLocalStorage from '../hooks/useLocalStorage';
// import s from '../app/App.module.css';
// // import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const onFilterInput = value => {
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    setContacts(contacts.filter(item => item.id !== elemToRemove));
  };

  return (
    <div >
      <h1>
        Phonebook
      </h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onFilterInput={onFilterInput} />
      <ContactList
        contacts={contacts}
        filter={filter}
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
      {contacts.length === 0 && (
        <p >no contacts available</p>
      )}
    </div>
  );
};

export default App;