import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ name, onFilterInput }) => {
    return (
        <label htmlFor="name" className={s.label}>
            Find contacts by name
            <input type="text"
                name='filter'
                value={name}
                onChange={onFilterInput}
                className={s.input}
            />
        </label>
    )
};

Filter.propTypes = {
    name: PropTypes.string,
    onFilterInput: PropTypes.func,
}