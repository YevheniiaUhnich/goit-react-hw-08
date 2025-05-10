import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsModalOpen,
  selectModalContactId,
  selectModalContactName,
} from "../../redux/modal/selectors";
import { deleteContacts } from "../../redux/contacts/operations";
import { closeModal } from "../../redux/modal/slice";
import s from "./ConfirmDeleteModal.module.css";

export const ConfirmDeleteModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const contactId = useSelector(selectModalContactId);
  const contactName = useSelector(selectModalContactName);

  if (!isOpen) return null;

  const handleConfirm = () => {
    dispatch(deleteContacts(contactId));
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <div className={s.confirmWrapper}>
      <div className={s.confirm}>
        <p className={s.titleConfirm}>
          Are you sure you want to delete the contact "{contactName}"?
        </p>
        <div className={s.boxBtn}>
          <button onClick={handleConfirm} className={s.btnConfirm}>
            Confirm
          </button>
          <button onClick={handleCancel} className={s.btnCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
