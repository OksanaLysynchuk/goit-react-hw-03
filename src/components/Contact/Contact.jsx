import CSS from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={CSS.container}>
      <IoMdPerson className={CSS.icon} />
      <p className={CSS.text}>{name}</p>
      <FaPhoneAlt className={CSS.icon} />
      <p className={CSS.text}>{number}</p>
      <button onClick={() => onDelete(id)} className={CSS.btn}>
        Delete
      </button>
    </div>
  );
}
