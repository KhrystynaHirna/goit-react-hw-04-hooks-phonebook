
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
 

const ContactList = ({ contacts, filter, filteredContacts, onDeleteBtn }) => {

    let rendered = filter === '' ? contacts : filteredContacts();

  
    return (
       
            <ul className={s.list}>
                {rendered.map(({ id, name, number }) => (
                    <li key={id}
                        id={id}
                        name={name}
                        number={number} 
                        className={s.item}
                    >
                        {name}: {number}
                        <button type='button' onClick={evt => onDeleteBtn(evt)} className={s.button}>
                            Delete
                        </button>
                    </li>))}
            </ul>
       
    )             
}



ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredContacts: PropTypes.func.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};

export default ContactList;