import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({visibleContacts, onDeleteContact}) => {
    return  <ul>
            {visibleContacts.map(({id, name, number}) => (
                <li key={id}>
                    {name}: {number}
                    <button className={css.button} onClick={()=>onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    
}

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onDeleteContact: PropTypes.func.isRequired,
}

