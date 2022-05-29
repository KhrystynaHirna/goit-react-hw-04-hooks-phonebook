import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import s from './Filter.module.css';

const Filter = ({ onFilterInput }) => {
    const [filter, setFilter] = useState('');
     useEffect(() => {
    onFilterInput(filter);
  }, [filter, onFilterInput]);
    return (
        <label htmlFor="name" className={s.label}>
            Find contacts by name
            <input type="text"
                name='filter'
                onChange={evt => setFilter(evt.target.value)}
                className={s.input}
            />
        </label>
    )
};


Filter.propTypes = {
    onFilterInput: PropTypes.func.isRequired,
}

export default Filter;