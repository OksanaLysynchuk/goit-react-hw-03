import CSS from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={CSS.list}>
      {contacts.map((contact) => (
        <li className={CSS.listitem} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
