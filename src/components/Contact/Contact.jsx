import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice/contactsSlice";

const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>{contact.name}</p>
        <p className={css.contactText}>{contact.number}</p>
      </div>
      <button className={css.deleteBtn} onClick={onDeleteContact}>
        Delete
      </button>
    </div>

        
  );
};

export default Contacts;