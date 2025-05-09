import { Field, Formik, Form, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { toast } from "react-toastify";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")

      .required("Required to fill"),
    number: Yup.string()
      .matches(/^\+?[0-9\s-]{7,15}$/, "Must be a valid phone number")
      .required("Number is required to fill"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      dispatch(
        addContacts({
          name: values.name,
          number: values.number,
        })
      );
      toast.success("Contact added successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding contact:", error);
      toast.error("Error adding contact. Please try again.");
    }
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}>
        <Form className={s.formWrapper}>
          <label htmlFor={nameFieldId} className={s.label}>
            <span className={s.textSpan}>Name</span>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>

          <label htmlFor={numberFieldId} className={s.label}>
            <span className={s.textSpan}>Number</span>
            <Field
              className={s.input}
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>

          <button type="submit" className={s.btnAddContact}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
