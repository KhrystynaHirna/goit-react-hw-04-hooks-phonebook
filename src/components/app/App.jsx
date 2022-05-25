import { Component } from "react";
import ContactForm from '../phonebookForm/ContactForm';
import { ContactList } from '../contacts/ContactList';
import { Filter } from '../filter/Filter';
import s from '../app/App.module.css';
import { nanoid } from "nanoid";

class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}
  onSubmit = (formData) => {
    if (this.state.contacts.find(contact => contact.name === formData.name)) {
      return alert(`${formData.name} is already in contacts`);
    }
    let id = nanoid();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...formData, id }],
    }))
  };
  onFilter = evt => {
    this.setState({ filter: evt.target.value });
  }
  onDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(item => item.id !== id)
    }))
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    console.log(prevProps);
    console.log(prevState);
    console.log(this.state);

    if (this.state.contacts !== prevState.contacts) {
      console.log('Contacts update');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    console.log('App component did mount')

    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);
    // console.log(parcedContacts);
    if (parcedContacts) {
      this.setState({ contacts: parcedContacts });
    }
  }

  render() {
    const filter = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={this.state.filter} onFilterInput={this.onFilter} />
        <ContactList formData={filter} onDeleteBtn={this.onDeleteContact}/>
      </div>
    );
  }
  
};

export default App;
