import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

export const App = () => {
  return (
    <>
      <ContactForm></ContactForm>
      <ContactFilter />

      <ContactList />
    </>
  );
};
