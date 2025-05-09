import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  useEffect(() => {
    document.title = "Your contacts";
  }, []);

  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Your Contacts</h1>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      <ContactList />
    </>
  );
}
