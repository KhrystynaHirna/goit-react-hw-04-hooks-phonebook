import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';


class ContactForm extends Component {

 state = {
  name: '',
  number: '',
}

    onInputChange = name => evt => {
        const { name, value } = evt.target;
    
        this.setState(() => ({
            [name]: value,
        }))
    };
    
    onFormSubmit = evt => {
        evt.preventDefault();
        const { onSubmit } = this.props;

        onSubmit?.(this.state);
        this.reset();
    };

    reset = () => {
        this.setState(() => ({
            name: '',
            number: '',
        }))
    };

    inputNameId = nanoid();
    inputNumberId = nanoid();


    render() {
        const { name, number } = this.state;

     return (
         <form onSubmit={this.onFormSubmit} className={s.container}>
             <label htmlFor={this.inputNameId} className={s.label}>
                 Name
             <input
            onChange={this.onInputChange(name)}
            type="text"
            name="name"
            value={name}
            id={this.inputNameId}   
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input_first}
                 />
             </label>
             <label htmlFor={this.inputNumberId} className={s.label}>
                 Number
                 <input
            onChange={this.onInputChange(number)}
            type="tel"
            name="number"
            value={number}
            id={this.inputNumberId}     
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={s.input_second}
            />
             </label>
             <button type='submit' className={s.button}>
                Add contact
        </button> 
        </form>
     )} 
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
