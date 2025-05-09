import { useDispatch } from "react-redux";
import s from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { fetchContacts } from "../../redux/contacts/operations";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        console.log("Registration success");
        localStorage.setItem("token", data.token);
        dispatch(fetchContacts());
        resetForm();
      })
      .catch(() => {
        console.log("Registration error");
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}>
      <Form className={s.form} autoComplete="off">
        <label className={s.label}>
          Username
          <Field type="text" name="name" className={s.field} />
        </label>

        <label className={s.label}>
          Email
          <Field type="email" name="email" className={s.field} />
        </label>

        <label className={s.label}>
          Password
          <Field type="password" name="password" className={s.field} />
        </label>

        <button className={s.btnRegistration} type="submit">
          Registration
        </button>
      </Form>
    </Formik>
  );
};
