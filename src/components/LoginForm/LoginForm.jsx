import { useDispatch } from "react-redux";
import s from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { fetchContacts } from "../../redux/contacts/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting values:", values);
    dispatch(logIn(values))
      .unwrap()
      .then((data) => {
        console.log("login success");
        localStorage.setItem("token", data.token);
        dispatch(fetchContacts());
        resetForm();
      })
      .catch(() => {
        console.log("login error");
      });
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}>
      <Form className={s.formLogin} autoComplete="off">
        <label className={s.labelLogin}>
          Email
          <Field type="email" name="email" className={s.field} />
        </label>

        <label className={s.labelLogin}>
          Password
          <Field type="password" name="password" className={s.field} />
        </label>

        <button className={s.btnLogIn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};
