
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
 

export const ContactList = ({ formData, onDeleteBtn }) => {

    return (
       
            <ul className={s.list}>
                {formData.map(({ id, name, number }) => (
                    <li key={id}
                        id={id}
                        name={name}
                        number={number} 
                        className={s.item}
                    >
                        {name}: {number}
                        <button type='button' onClick={() => onDeleteBtn(id)} className={s.button}>
                            Delete
                        </button>
                    </li>))}
            </ul>
       
    )             
}

ContactList.protoTypes = {
    FormData: PropTypes.arrayOf(
        PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
      onDeleteBtn: PropTypes.func.isRequired,
};
