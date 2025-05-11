// import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";

import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
// import { deleteContacts } from "../../redux/contacts/operations";
import { AiTwotoneDelete } from "react-icons/ai";
import { VscEdit } from "react-icons/vsc";
import { setEditContact } from "../../redux/contacts/slice";
import { openModal } from "../../redux/modal/slice";
import { useRef } from "react";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const contactRef = useRef(null);

  const handleDelete = () => {
    const rect = contactRef.current.getBoundingClientRect();
    dispatch(
      openModal({
        id: contact.id,
        name: contact.name,
        position: { top: rect.top, left: rect.left },
      })
    );
  };

  const handleEdit = () => {
    dispatch(setEditContact(contact));
  };

  return (
    <div className={s.listItem} ref={contactRef}>
      <div className={s.wrapperContact}>
        <div className={s.wrapper}>
          <IoPerson className={s.icon} />
          <p className={s.titleContact}>{contact.name}</p>
        </div>
        <div>
          <BsFillTelephoneFill className={s.icon} />
          <span className={s.titleNumber}>{contact.number}</span>
        </div>
      </div>

      <div className={s.btnBox}>
        <button onClick={handleEdit} className={s.btnContact}>
          <VscEdit className={s.icon} />
        </button>
        <button onClick={handleDelete} className={s.btnContact}>
          <AiTwotoneDelete className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
