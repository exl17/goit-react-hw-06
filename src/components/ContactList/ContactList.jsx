import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";


const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact
            contact={contact}
            name={
              <>
                <BsFillPersonFill className={css.contactListIcon} />{" "}
                {contact.name}
              </>
            }
            number={
              <>
                <BsFillTelephoneFill className={css.contactListIcon} />{" "}
                {contact.number}
              </>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;