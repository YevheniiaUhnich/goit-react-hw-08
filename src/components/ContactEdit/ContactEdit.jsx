import { Form, Formik, Field, ErrorMessage } from "formik";
import s from "./ContactEdit.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { selectEditContact } from "../../redux/contacts/selectors";
import { toast } from "react-toastify";

export const ContactEdit = () => {
  const dispatch = useDispatch();
  const contactToEdit = useSelector(selectEditContact);

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required to fill"),
    number: Yup.string()
      .matches(/^\+?[0-9\s-]{7,15}$/, "Must be a valid phone number")
      .required("Number is required to fill"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      dispatch(
        editContact({
          ...contactToEdit,
          name: values.name,
          number: values.number,
        })
      );
      toast.success("Contact updated successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding contact:", error);
      toast.error("Error updating contact. Please try again.");
    }
  };
  if (!contactToEdit) return null;

  return (
    <div className={s.wrapperEdit}>
      <Formik
        initialValues={{
          name: contactToEdit.name,
          number: contactToEdit.number,
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}>
        <Form className={s.formEdit}>
          <label htmlFor="name" className={s.label}>
            <span className={s.spanEdit}>Name</span>
            <Field type="text" name="name" className={s.fieldEdit} />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <label htmlFor="number" className={s.label}>
            <span className={s.spanEdit}>Number</span>
            <Field type="tel" name="number" className={s.fieldEdit} />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit" className={s.btnEdit}>
            Edit contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
