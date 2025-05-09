import { useEffect } from "react";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  useEffect(() => {
    document.title = "Register";
  }, []);
  return <RegistrationForm />;
}
