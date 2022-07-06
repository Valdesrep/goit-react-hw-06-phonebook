import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { deleteContact } from '../../redux/action';

const ContactList = () => {
  const dispatch = useDispatch();

  const getFilterContacts = (contacts, filter) => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    const filtredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilterValue);
    });
    return filtredContacts;
  };

  const contacts = useSelector(state =>
    getFilterContacts(state.contacts.items, state.contacts.filter)
  );

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <span>
                {name}: {number}
              </span>
              <button
                className={s.delete}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
