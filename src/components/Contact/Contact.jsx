import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <div className={css.container}>
          <FaUserAlt />
          <p>{name}</p>
        </div>
        <div className={css.container}>
          <FaPhoneAlt />
          <a href={`tel: + ${number}`}>{number}</a>
        </div>
      </div>
      <button onClick={() => onDelete(id)} className={css.btn}>
        Delete
      </button>
    </>
  );
}
