import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';


export default function ContactForm({ onSubmit }) {
    
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const onInputChange = () => evt => {
        const { name, value } = evt.target;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }
    
    const onFormSubmit = evt => {
        evt.preventDefault();

        onSubmit?.({name, number});
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

   const inputNameId = nanoid();
   const inputNumberId = nanoid();

     return (
         <form onSubmit={onFormSubmit} className={s.container}>
             <label htmlFor={inputNameId} className={s.label}>
                 Name
             <input
            onChange={onInputChange(name)}
            type="text"
            name="name"
            value={name}
            id={inputNameId}   
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input_first}
                 />
             </label>
             <label htmlFor={inputNumberId} className={s.label}>
                 Number
                 <input
            onChange={onInputChange(name)}
            type="tel"
            name="number"
            value={number}
            id={inputNumberId}     
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
     )
}



ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}