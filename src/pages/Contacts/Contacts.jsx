import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { Header, SectionHeader } from 'components/App.styled';
import Filter from 'components/Filter';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div>
      <Header>Phonebook</Header>
      <ContactForm />

      <SectionHeader>Contacts</SectionHeader>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};
