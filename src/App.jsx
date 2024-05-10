import { useState, useEffect } from "react";
import initialContacts from "../src/contact-list.json";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      setContacts(initialContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((oldContacts) => {
      return [...oldContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((oldContacts) => {
      return oldContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const searchedContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={CSS.container}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={searchedContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
