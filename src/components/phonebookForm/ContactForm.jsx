// import { useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import s from './ContactForm.module.css';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix';



// const ContactForm = ({contacts, onSubmit}) => {

//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');
//     const [isDisabled, setIsDisabled] = useState(false);
    

// //     const inputChange = () => evt => {
// //         const { name, value } = evt.target;
        
// //         switch (name) {
// //             case 'name':
// //                 setName(value);
// //                 break;
// //             case 'number':
// //                 setNumber(value);
// //                 break;
// //             default: return;
// //         }
// //    }

//     const onFormSubmit = evt => {
//         evt.pteventDefault();

//         const contact = {
//             name,
//             number,
//         };
//         onSubmit(contact);
//         reset();
//     };
  
//     const reset = () => {
//         setName("");
//         setNumber("");
//     }
//     const inputNameId = nanoid();
//     const inputNumberId = nanoid();       
   


//     useEffect(() => {
//     setIsDisabled(false);
//     const finder = contacts.find(contact =>
//         contact.name.toLowerCase() === name.toLowerCase() ||
//         contact.number === number);

//     if (finder) {
//      setIsDisabled(true);
//       Notify.warning(`${name} ${number} is already in contacts.`);
//       reset();
//     }
//   }, [name, number, contacts]);




//      return (
//          <form onSubmit={onFormSubmit} className={s.container}>
//              <label htmlFor={inputNameId} className={s.label}>
//                  Name
//              <input
//             onChange={evt => setName(evt.currentTarget.value)}
//             type="text"
//             name="name"
//             value={name}
//             id={inputNameId}   
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             className={s.input_first}
//                  />
//              </label>
//              <label htmlFor={inputNumberId} className={s.label}>
//                  Number
//                  <input
//             onChange={evt => setNumber(evt.currentTarget.value)}
//             type="tel"
//             name="number"
//             value={number}
//             id={inputNumberId}     
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             className={s.input_second}
//             />
//              </label>
//              <button type='submit' className={s.button} disabled={isDisabled}>
//                 Add contact
//              </button> 
//         </form>
//      )} 




// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     // contacts: PropTypes.arrayOf(
//     // PropTypes.shape({
//       name: PropTypes.string,
//       number: PropTypes.string,
// //     })
// //   ).isRequired,
// }

// export default ContactForm;

import { useState, useEffect } from 'react';
import shortid from 'shortid';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    addContact(contact);
    reset();
  };

  useEffect(() => {
    setIsDisabled(false);
    const contactFinder = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (contactFinder) {
      setIsDisabled(true);
      Notify.warning(`${name} ${number} is already in contacts.`);
      reset();
    }
  }, [name, number, contacts]);

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="john doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          placeholder="+380 33 333 3333"
      
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          name="number"
          onChange={e => setNumber(e.currentTarget.value)}
          required
        />
      </label>

      <button
        // className={styles.submitButton}
        type="submit"
        disabled={isDisabled}
      >
        add contact
       
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactForm;